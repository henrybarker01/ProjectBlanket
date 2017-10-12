using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ProjectBlanket.DataAccess.Entities.Entities;

namespace ProjectBlanket.DataAccess.Contracts.Interfaces
{
    public interface IEquipmentRepository
    {
        Task<List<Equipment>> List();
        Task<Equipment> Find(Guid id);
        Task<Equipment> Add(Equipment equipment);
        Task<List<Equipment>> GetCalibrationsDueInSixMonths();
    }
}
