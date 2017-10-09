using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Threading.Tasks;
using ProjectBlanket.DataAccess.Contracts.Interfaces;
using ProjectBlanket.DataAccess.DbContext;
using ProjectBlanket.DataAccess.Entities.Entities;

namespace ProjectBlanket.DataAccess.Repositories
{
    public class EquipmentRepository : IEquipmentRepository
    {
        private readonly ProjectBlanketContext _dbContext;

        public EquipmentRepository(ProjectBlanketContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<List<Equipment>> List() =>
            await _dbContext.Equipment.ToListAsync();


        public async Task<Equipment> Add(Equipment equipment)
        {
            foreach (var calibration in equipment.CalibrationList)
            {
                _dbContext.Calibration.Add(calibration);
            }
            _dbContext.Equipment.Add(equipment);
            await _dbContext.SaveChangesAsync();
            return equipment;
        }
    }
}
