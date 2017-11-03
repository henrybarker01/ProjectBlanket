using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using ProjectBlanket.DataAccess.Contracts.Interfaces;
using ProjectBlanket.DataAccess.DbContext;
using ProjectBlanket.DataAccess.Entities.Entities;
using ProjectBlanket.Service.Contracts.Models.Equipment;

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

        public async Task<Equipment> Find(Guid id) =>
            await _dbContext.Equipment.Include(x=>x.CalibrationList).FirstAsync(x=>x.Id == id);


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

        public async Task<List<EquipmentCalibrationDateModel>> GetCalibrationsDueInSixMonths()
        {
           var comparisonDate = DateTime.Now.AddMonths(-6);
            return await (from equipment in _dbContext.Equipment
                          join calibration in _dbContext.Calibration on equipment.Id equals calibration.EquipmentId
                          where calibration.CalibrationDue >= comparisonDate
                          orderby calibration.CalibrationDue descending
                          select new EquipmentCalibrationDateModel
                          {
                              Id = equipment.Id,
                              Name = equipment.Name,
                              CalibrationDue = calibration.CalibrationDue
                          }).ToListAsync();
        }

    }
}
