using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjectBlanket.Emailer
{
   public interface IEmailer
    {
        void SendEmailFromTemplateFile(IEnumerable<string> to, IEnumerable<string> cc, IEnumerable<string> bcc, string subject, string templateFileName, bool isHtml, bool highPriority,
            HybridDictionary replacementValues, string fromAddress = null, Dictionary<string, object> attachments = null);
    }
}
