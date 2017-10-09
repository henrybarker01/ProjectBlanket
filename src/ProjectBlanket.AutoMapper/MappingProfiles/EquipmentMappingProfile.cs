using AutoMapper;
using ProjectBlanket.WebApi.Models.Equipment;
using ProjectBlanket.DataAccess.Entities.Entities;
using ProjectBlanket.Service.Contracts.Models.Equipment;

namespace ProjectBlanket.AutoMapper.MappingProfiles
{
    public class EquipmentMappingProfile : Profile
    {
        public EquipmentMappingProfile()
        {
            CreateMap<Equipment, EquipmentListModel>();
            CreateMap<Equipment, EquipmentModel>();
            CreateMap<EquipmentModel, Equipment>();
            CreateMap<Calibration, CalibrationModel>();
            CreateMap<CalibrationModel, Calibration>();
        }
    }
}
