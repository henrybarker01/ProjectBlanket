using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AutoMapper;
using ProjectBlanket.Service.Contracts.Interfaces;

namespace ProjectBlanket.WebApi.Controllers
{
    public class DashboardController : BaseApiController
    {
        private readonly IDashboardService _dashboardService;
        public DashboardController(IMapper mapper, IDashboardService dashboardService) : base(mapper)
        {
            _dashboardService = dashboardService;
        }

    }
}
