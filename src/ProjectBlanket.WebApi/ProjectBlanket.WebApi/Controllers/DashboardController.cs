using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using AutoMapper;
using ProjectBlanket.DataAccess.Entities.Entities;
using ProjectBlanket.Service.Contracts.Interfaces;
using ProjectBlanket.Service.Contracts.Models.Dashboard;

namespace ProjectBlanket.WebApi.Controllers
{
    [Authorize]
    [RoutePrefix("api/dashboard")]
    public class DashboardController : BaseApiController
    {
        private readonly IDashboardService _dashboardService;
        public DashboardController(IMapper mapper, IDashboardService dashboardService) : base(mapper)
        {
            _dashboardService = dashboardService;
        }

        [HttpPost, Route("saveDashboard")]
        public async Task<IHttpActionResult> SaveDashboard(List<WidgetModel> widgetList)
        {
            await _dashboardService.SaveDashboard(Map<List<Widget>>(widgetList), GetUserId(this));
            return Ok();
        }

        [HttpGet, Route("GetDashboardWidgetsByUserId")]
        public async Task<IHttpActionResult> GetDashboardWidgetsByUserId()
        {
            var result = await _dashboardService.GetDashboardWidgetsByUserId(GetUserId(this));
            return Ok(Map<List<WidgetModel>>(result));
        }

    }
}
