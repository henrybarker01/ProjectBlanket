using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using AutoMapper;
using ProjectBlanket.Service.Contracts.Interfaces;
using ProjectBlanket.WebApi.Models.Equipment;

namespace ProjectBlanket.WebApi.Controllers
{
    [RoutePrefix("api/equipment")]
    public class EquipmentController : BaseApiController
    {
        private readonly IEquipmentService _equipmentService;

        public EquipmentController(IEquipmentService equipmentService, IMapper mapper) : base(mapper)
        {
            _equipmentService = equipmentService;
        }

        [HttpGet, Route("list")]
        public async Task<List<EquipmentListModel>> List()
        {
            var result = await _equipmentService.List();
            return Map<List<EquipmentListModel>>(result);
        }
    }
}
