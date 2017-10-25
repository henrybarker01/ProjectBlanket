using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using ProjectBlanket.DataAccess.Contracts.Interfaces;
using ProjectBlanket.DataAccess.DbContext;
using ProjectBlanket.DataAccess.Entities.Entities;

namespace ProjectBlanket.DataAccess.Repositories
{
    public class DashboardRepository : IDashboardRepository
    {
        private readonly ProjectBlanketContext _dbContext;

        public DashboardRepository(ProjectBlanketContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<List<Widget>> SaveDashboard(List<Widget> widgetList, Guid userid)
        {
            var widgetsToDelete = await _dbContext.Widget.Where(x => x.UserId == userid).ToListAsync();
             _dbContext.Widget.RemoveRange(widgetsToDelete);
             
            foreach (var widget in widgetList)
            {
                widget.UserId = userid;
               }
            _dbContext.Widget.AddRange(widgetList);
           await  _dbContext.SaveChangesAsync();
            return widgetList;
        }

        public async Task<List<Widget>> GetDashboardWidgetsByUserId(Guid userId) =>
            await _dbContext.Widget.Where(x => x.UserId == userId).ToListAsync();

    }

    
}
