using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ProjectBlanket.DataAccess.Contracts.Interfaces;
using ProjectBlanket.DataAccess.Entities.Entities;
using ProjectBlanket.Service.Contracts.Interfaces;

namespace ProjectBlanket.Service.Services
{
    public class DashboardService : IDashboardService
    {
        private readonly IDashboardRepository _dashboardRepository;
        public DashboardService(IDashboardRepository dashboardRepository)
        {
            _dashboardRepository = dashboardRepository;
        }

        public async Task<List<Widget>> SaveDashboard(List<Widget> widgetList, Guid userid) =>
           await _dashboardRepository.SaveDashboard(widgetList, userid);

        public async Task<List<Widget>> GetDashboardWidgetsByUserId(Guid userId) =>
            await _dashboardRepository.GetDashboardWidgetsByUserId(userId);
    }
}
