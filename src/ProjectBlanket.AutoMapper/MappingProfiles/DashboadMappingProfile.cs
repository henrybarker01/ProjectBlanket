using AutoMapper;
using ProjectBlanket.DataAccess.Entities.Entities;
using ProjectBlanket.Service.Contracts.Models.Dashboard;

namespace ProjectBlanket.AutoMapper.MappingProfiles
{
    public class DashboadMappingProfile : Profile
    {
        public DashboadMappingProfile()
        {
            CreateMap<Widget, WidgetModel>();
            CreateMap<WidgetModel, Widget>();
        }
    }
}