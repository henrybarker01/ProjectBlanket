using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ProjectBlanket.DataAccess.Entities.Entities;

namespace ProjectBlanket.Service.Contracts.Interfaces
{
    public interface IEquipmentService
    {
        Task<List<Equipment>> List();
        Task<Equipment> Find(Guid id);
        Task<Equipment> Add(Equipment equipment);
        Task<List<Equipment>> GetCalibrationsDueInSixMonths();
    }
}
