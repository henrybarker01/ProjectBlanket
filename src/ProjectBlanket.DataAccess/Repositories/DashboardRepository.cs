using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectBlanket.DataAccess.Contracts.Interfaces;
using ProjectBlanket.DataAccess.DbContext;

namespace ProjectBlanket.DataAccess.Repositories
{
    public class DashboardRepository : IDashboardRepository
    {
        private readonly ProjectBlanketContext _dbContext;

        public DashboardRepository(ProjectBlanketContext dbContext)
        {
            _dbContext = dbContext;
        }

    }
}
