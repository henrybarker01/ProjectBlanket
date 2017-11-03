using System;

namespace ProjectBlanket.Service.Contracts.Models.Equipment
{
    public class EquipmentCalibrationDateModel
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public DateTime CalibrationDue { get; set; }
    }
}
