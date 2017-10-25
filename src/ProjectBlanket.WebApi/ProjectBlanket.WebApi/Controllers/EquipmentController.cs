using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using AutoMapper;
using ProjectBlanket.DataAccess.Entities.Entities;
using ProjectBlanket.Service.Contracts.Interfaces;
using ProjectBlanket.Service.Contracts.Models.Equipment;
using ProjectBlanket.WebApi.Models.Equipment;

namespace ProjectBlanket.WebApi.Controllers
{
    [Authorize]
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

        [HttpGet, Route("get/{id}")]
        public async Task<EquipmentModel> Get(Guid id)
        {
            var result = await _equipmentService.Find(id);
            return Map<EquipmentModel>(result);
        }

        [HttpPut, Route("add")]
        public async Task<Guid> Add(EquipmentModel equipmentModel) =>
            (await _equipmentService.Add(Map<Equipment>(equipmentModel))).Id;

        [HttpGet, Route("getCalibrationsDueInSixMonths")]
        public async Task<List<EquipmentModel>> GetCalibrationsDueInSixMonths()
        {
            var result = await _equipmentService.GetCalibrationsDueInSixMonths();
        
            return Map<List<EquipmentModel>>(result);
        }
    }
}