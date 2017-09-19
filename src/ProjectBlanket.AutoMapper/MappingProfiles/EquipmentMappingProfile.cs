using AutoMapper;
using ProjectBlanket.WebApi.Models.Equipment;
using ProjectBlanket.DataAccess.Entities.Entities;

namespace ProjectBlanket.AutoMapper.MappingProfiles
{
  public  class EquipmentMappingProfile : Profile
    {
        public EquipmentMappingProfile()
        {
            CreateMap<Equipment, EquipmentListModel>();
        }
    }
}
