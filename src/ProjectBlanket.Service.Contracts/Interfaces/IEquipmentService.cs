using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ProjectBlanket.DataAccess.Entities.Entities;
using ProjectBlanket.Service.Contracts.Models.Equipment;

namespace ProjectBlanket.Service.Contracts.Interfaces
{
    public interface IEquipmentService
    {
        Task<List<Equipment>> List();
        Task<Equipment> Find(Guid id);
        Task<Equipment> Add(Equipment equipment);
        Task<List<EquipmentCalibrationDateModel>> GetCalibrationsDueInSixMonths();
    }
}
