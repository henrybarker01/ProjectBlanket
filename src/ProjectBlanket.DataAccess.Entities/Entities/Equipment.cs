using System;
using System.ComponentModel.DataAnnotations.Schema;
using ProjectBlanket.DataAccess.Core.Entities;

namespace ProjectBlanket.DataAccess.Entities.Entities
{
    public class Equipment : EntityBase
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string Model { get; set; }
        public string SerialNumber { get; set; }
        public decimal InitialCost { get; set; }
        public bool IsCalibrated { get; set; }

        public Guid CalibrationId { get; set; }

        [ForeignKey("CalibrationId")]
        public Calibration Calibration { get; set; }
    }
}
