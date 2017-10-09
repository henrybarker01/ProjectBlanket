using System;
using System.ComponentModel.DataAnnotations.Schema;
using ProjectBlanket.DataAccess.Core.Entities;

namespace ProjectBlanket.DataAccess.Entities.Entities
{
   public class Calibration : EntityBase
    {
        public string FileName { get; set; }
        public byte[] CalibrationCertificate { get; set; }
        public DateTime CalibrationDate { get; set; }   
        public DateTime CalibrationDue { get; set; }
        public Guid EquipmentId { get; set; }

        [ForeignKey("EquipmentId")]
        public Equipment Equipment { get; set; }
    }
}
