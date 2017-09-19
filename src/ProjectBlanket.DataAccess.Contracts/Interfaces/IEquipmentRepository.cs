using System.Collections.Generic;
using System.Threading.Tasks;
using ProjectBlanket.DataAccess.Entities.Entities;

namespace ProjectBlanket.DataAccess.Contracts.Interfaces
{
    public interface IEquipmentRepository
    {
        Task<List<Equipment>> List();
        Task<Equipment> Add(Equipment equipment);
    }
}
