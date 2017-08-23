using Autofac;
using ProjectBlanket.DataAccess.DbContext;

namespace ProjectBlanket.DataAccess.Module
{
   public class ProjectBlanketContextModule : Autofac.Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterType<LazyDbContextWrapper>().InstancePerLifetimeScope();
            builder.Register(CreateSageOneDbContext).AsImplementedInterfaces().As<Microsoft.EntityFrameworkCore.DbContext>().InstancePerLifetimeScope();
        }

        private static ProjectBlanketContext CreateSageOneDbContext(IComponentContext context)
        {
            var projectBlanketContext = new ProjectBlanketContext();

            var lazyDbContextWrapper = context.Resolve<LazyDbContextWrapper>();
            lazyDbContextWrapper.IsDbContextActivated = true;
            return projectBlanketContext;
        }
    }
}
