using System;
using ProjectBlanket.DataAccess.Core.Entities;

namespace ProjectBlanket.DataAccess.Entities.Entities
{
   public class Calibration : EntityBase
    {
        public byte[] CalibrationCertificate { get; set; }
        public DateTime DateCalibrated { get; set; }    
    }
}
