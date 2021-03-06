﻿using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ProjectBlanket.DataAccess.Entities.Entities;

namespace ProjectBlanket.DataAccess.Contracts.Interfaces
{
    public interface IDashboardRepository
    {
        Task<List<Widget>> SaveDashboard(List<Widget> widgetList, Guid userid);
        Task<List<Widget>> GetDashboardWidgetsByUserId(Guid userId);
    }
}
