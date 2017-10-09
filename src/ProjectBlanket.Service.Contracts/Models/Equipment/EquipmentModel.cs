using System;
using System.Collections.Generic;

namespace ProjectBlanket.Service.Contracts.Models.Equipment
{
    public class EquipmentModel
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Model { get; set; }
        public string SerialNumber { get; set; }
        public decimal InitialCost { get; set; }
        public bool IsCalibrated { get; set; }
        public Guid CalibrationId { get; set; }

        public IList<CalibrationModel> CalibrationList { get; set; }

        
    }
}