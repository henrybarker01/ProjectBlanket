using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ProjectBlanket.DataAccess.Contracts.Interfaces;
using ProjectBlanket.DataAccess.Entities.Entities;
using ProjectBlanket.Service.Contracts.Interfaces;

namespace ProjectBlanket.Service.Services
{
   public class EquipmentService : IEquipmentService
   {
       private readonly IEquipmentRepository _equipmentRepository;
        public EquipmentService(IEquipmentRepository equipmentRepository)
        {
            _equipmentRepository = equipmentRepository;
        }

       public async Task<List<Equipment>> List() =>
           await _equipmentRepository.List();

       public async Task<Equipment> Find(Guid id) =>
           await _equipmentRepository.Find(id);



       public async Task<Equipment> Add(Equipment equipment) =>
           await _equipmentRepository.Add(equipment);

       public async Task<List<Equipment>> GetCalibrationsDueInSixMonths() =>
           await _equipmentRepository.GetCalibrationsDueInSixMonths();

   }
}
