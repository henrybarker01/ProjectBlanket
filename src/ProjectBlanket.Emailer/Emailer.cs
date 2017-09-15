using ProjectBlanket.ExtensionMethods;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Net.Mime;
using System.Reflection;
using System.Text;
using System.Text.RegularExpressions;

namespace ProjectBlanket.Emailer
{
    public class Emailer : IEmailer
    {
        private readonly string _emailTemplateFilesPathRelative;
        private readonly string _smtpHost;
        private readonly int _smtpPort;
        private readonly int _smtpTimeout;
        private readonly string _smtpUserName;
        private readonly string _smtpPassword;
        private readonly string _smtpIISPickupDirectory;
        private readonly string _defaultFromAddress;

        public Emailer()
        {
            _emailTemplateFilesPathRelative = ConfigurationManager.AppSettings["EmailTemplateFilesPathRelative"];
            _smtpHost = ConfigurationManager.AppSettings["SmtpHost"];
            _smtpPort = int.Parse(ConfigurationManager.AppSettings["SmtpPort"]);
            _smtpTimeout = int.Parse(ConfigurationManager.AppSettings["SmtpTimeout"]);
            _smtpUserName = ConfigurationManager.AppSettings["SmtpUserName"];
            _smtpPassword = ConfigurationManager.AppSettings["SmtpPassword"];
            _smtpIISPickupDirectory = ConfigurationManager.AppSettings["SmtpIISPickupDirectory"];
            _defaultFromAddress = ConfigurationManager.AppSettings["DefaultFromAddress"];
        }

        public void SendEmailFromTemplateFile(IEnumerable<string> to, IEnumerable<string> cc, IEnumerable<string> bcc, string subject, string templateFileName, bool isHtml, bool highPriority,
            HybridDictionary replacementValues, string fromAddress = null, Dictionary<string, object> attachments = null)
        {
            var bodyText = GetEmailBodyFromTemplateFile(templateFileName, replacementValues, out subject, out fromAddress);

            DoSendEmailFromTemplate(to, cc, bcc, subject, bodyText, isHtml, highPriority, replacementValues, fromAddress, attachments);
        }

        private string GetEmailBodyFromTemplateFile(string templateFileName, HybridDictionary replacementValues, out string subject, out string fromAddress)
        {
            subject = string.Empty;
            fromAddress = string.Empty;

            var assemblyFolder = Path.GetDirectoryName(new Uri(Assembly.GetExecutingAssembly().CodeBase).LocalPath) + "\\";

            var filename = Path.Combine(assemblyFolder, _emailTemplateFilesPathRelative, Path.GetFileName(templateFileName));
            if (!File.Exists(filename))
            {
                throw new FileNotFoundException("Email Template File Not Found.");
            }

            var bodyText = File.ReadAllText(filename);
            bodyText = Regex.Replace(bodyText, @"\r\n?|\n", "\r\n");

            return BodyFromTemplate(ref subject, ref bodyText, replacementValues, ref fromAddress);
        }

        private void DoSendEmailFromTemplate(IEnumerable<string> to, IEnumerable<string> cc, IEnumerable<string> bcc, string subject, string body, bool isHtml,
            bool highPriority, HybridDictionary replacementValues, string fromAddress, Dictionary<string, object> attachments)
        {
            var emailBody = BodyFromTemplate(ref subject, ref body, replacementValues, ref fromAddress);
            DoSendEmail(to, cc, bcc, subject, emailBody, isHtml, highPriority, attachments, fromAddress);
        }

        private void DoSendEmail(IEnumerable<string> to, IEnumerable<string> cc, IEnumerable<string> bcc, string subject, string body, bool isHtml, bool highPriority, Dictionary<string, object> attachments, string fromAddress)
        {
            using (var mailClient = new SmtpClient())
            {
               // if (_smtpIISPickupDirectory.Length > 0)
               // {
                //    mailClient.DeliveryMethod = SmtpDeliveryMethod.PickupDirectoryFromIis;
                //}
                mailClient.Host = _smtpHost;
                mailClient.Port = _smtpPort;
                mailClient.Timeout = _smtpTimeout <= 1 ? 30000 : _smtpTimeout;  // timeout in milliseconds
                DoSendEmail(to, cc, bcc, subject, body, isHtml, highPriority, mailClient, attachments, fromAddress);
            }
        }

        private string FindTagAndReplace(string tagToFind, ref string body, HybridDictionary replacementValues, string useIfTagNotFound)
        {
            var newSubjectPos = body.IndexOf(tagToFind, StringComparison.Ordinal);
            StringBuilder newSubjectBuilder = null;
            if (newSubjectPos >= 0)
            {
                var newString = body.Substring(newSubjectPos + tagToFind.Length, body.IndexOf("\r\n", newSubjectPos, StringComparison.CurrentCulture) - newSubjectPos - tagToFind.Length - 3);
                newSubjectBuilder = new StringBuilder(newString);
                foreach (string key in replacementValues.Keys)
                {
                    newSubjectBuilder.Replace(key, replacementValues[key] == null
                        ? string.Empty
                        : replacementValues[key].ToString());
                }
                body = body.Remove(newSubjectPos, body.IndexOf("\r\n", newSubjectPos, StringComparison.CurrentCulture) + 2);
            }
            else
            {
                newSubjectBuilder = new StringBuilder(useIfTagNotFound);
                foreach (string key in replacementValues.Keys)
                {
                    newSubjectBuilder.Replace(key, replacementValues[key] != null
                        ? replacementValues[key].ToString()
                        : string.Empty);
                }
            }

            return newSubjectBuilder.ToString();
        }


        private string BodyFromTemplate(ref string subject, ref string body, HybridDictionary replacementValues, ref string fromAddress)
        {
            subject = FindTagAndReplace("{{{Subject:", ref body, replacementValues, subject);
            fromAddress = FindTagAndReplace("{{{FromEmail:", ref body, replacementValues, fromAddress);

            var bodyBuilder = new StringBuilder(body);
            foreach (string key in replacementValues.Keys)
            {
                bodyBuilder.Replace(key, replacementValues[key] != null
                    ? replacementValues[key].ToString()
                    : string.Empty);
            }

            var emailBody = bodyBuilder.ToString();
            return emailBody;
        }

        private void DoSendEmail(IEnumerable<string> to, IEnumerable<string> cc, IEnumerable<string> bcc, string subject, string body, bool isHtml, bool highPriority, SmtpClient mailClient,
            Dictionary<string, object> attachments, string fromAddress)
        {
            if (mailClient == null)
                throw new ArgumentNullException(nameof(mailClient));

            using (var mmessage = new MailMessage())
            {
                var basicCredential = new NetworkCredential(_smtpUserName, _smtpPassword);

                mailClient.UseDefaultCredentials = false;
                mailClient.Credentials = basicCredential;

                if (fromAddress.IsNullOrEmpty())
                {
                    fromAddress = _defaultFromAddress;
                }

                mmessage.From = new MailAddress(fromAddress);

                mmessage.IsBodyHtml = isHtml;
                mmessage.Priority = highPriority
                    ? MailPriority.High
                    : MailPriority.Normal;
                mmessage.To.Add(to.ToDelimitedString(", "));
                if (cc != null && cc.LongCount() > 0)
                {
                    mmessage.CC.Add(cc.ToDelimitedString(","));
                }
                if (bcc != null && bcc.LongCount() > 0)
                {
                    mmessage.Bcc.Add(bcc.ToDelimitedString(","));
                }
                mmessage.Subject = subject;
                mmessage.Body = body;
                if (attachments != null && attachments.Count > 0)
                {
                    foreach (var item in attachments)
                    {
                        var ct = new ContentType {MediaType = MediaTypeNames.Text.Plain};

                        var value = item.Value as Stream;
                        if (value != null)
                        {
                            ct.Name = item.Key;
                            mmessage.Attachments.Add(new Attachment(value, ct));
                        }
                        else
                        {
                            ct.Name = item.Key;
                            if (Path.GetExtension(item.Value.ToString()).ToUpper() == ".PDF")
                            {
                                ct.MediaType = MediaTypeNames.Application.Pdf;
                            }
                            mmessage.Attachments.Add(new Attachment(item.Value.ToString(), ct));
                        }
                    }
                }
                EmailExtension.RemoveDuplicateAddresses(mmessage.To, mmessage.CC);
                EmailExtension.RemoveDuplicateAddresses(mmessage.To, mmessage.Bcc);
                EmailExtension.RemoveDuplicateAddresses(mmessage.CC, mmessage.Bcc);
                mailClient.Send(mmessage);

            }
        }

    }

    public static class EmailExtension
    {
        #region Helper Methods

        internal static void RemoveDuplicateAddresses(MailAddressCollection toList, MailAddressCollection ccList)
        {
            var tmpToList = new MailAddress[toList.Count];
            toList.CopyTo(tmpToList, 0);
            toList.Clear();
            var tmpCcList = new MailAddress[ccList.Count];
            ccList.CopyTo(tmpCcList, 0);
            ccList.Clear();
            foreach (var item in tmpToList)
            {
                if (!toList.Contains(item))
                {
                    toList.Add(item);
                }
            }
            foreach (var item in tmpCcList)
            {
                if (!toList.Contains(item) && !ccList.Contains(item))
                {
                    ccList.Add(item);
                }
            }
        }

        internal static string ToDelimitedString(this IEnumerable<string> data, string delimiter)
        {
            if (data == null || !data.Any())
            {
                return string.Empty;
            }
            var result = new StringBuilder();
            foreach (var item in data)
            {
                result.Append(item + delimiter);
            }
            var delimiterLength = delimiter.Length;
            result.Remove(result.Length - delimiterLength, delimiterLength);
            return result.ToString();
        }

        #endregion
    }

}
