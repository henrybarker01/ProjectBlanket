using Autofac;
using AutoMapper;
using ProjectBlanket.AutoMapper.MappingProfiles;

namespace ProjectBlanket.AutoMapper
{
    public class AutoMapperConfig : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            var config = MapperConfiguration;
            builder.Register(c => config.CreateMapper()).As<IMapper>().SingleInstance();
        }

        public static readonly MapperConfiguration MapperConfiguration =
            new MapperConfiguration(x =>
            {
                x.AddProfile<QuoteMappingProfile>();
                x.AddProfile<EquipmentMappingProfile>();
                x.AddProfile<DashboadMappingProfile>();
            });
    }
}