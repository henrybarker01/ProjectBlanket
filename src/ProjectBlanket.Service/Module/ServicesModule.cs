using Autofac;
using ProjectBlanket.Service.Services;

namespace ProjectBlanket.Service.Module
{
    public class ServicesModule : Autofac.Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterType<QuoteService>().AsImplementedInterfaces();
            builder.RegisterType<EquipmentService>().AsImplementedInterfaces();
            builder.RegisterType<DashboardService>().AsImplementedInterfaces();
        }
    }
}