using System;

namespace ProjectBlanket.Service.Contracts.Models.Equipment
{
    public class CalibrationModel
    {
        public Guid Id { get; set; }
        public string FileName { get; set; }
        public byte[] CalibrationCertificate { get; set; }
        public DateTime CalibrationDate { get; set; }
        public DateTime CalibrationDue { get; set; }
    }
}
