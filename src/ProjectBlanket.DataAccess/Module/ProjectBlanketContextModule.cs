using Autofac;
using ProjectBlanket.DataAccess.DbContext;

namespace ProjectBlanket.DataAccess.Module
{
    public class ProjectBlanketContextModule : Autofac.Module
    {
        protected override void Load(ContainerBuilder builder)
        {
           builder.RegisterType<ProjectBlanketContext>().InstancePerRequest();
           // builder.RegisterType<ProjectBlanketContext>().As<System.Data.Entity.DbContext>().InstancePerRequest();


            // builder.RegisterType<LazyDbContextWrapper>().InstancePerLifetimeScope();
            // builder.Register(CreateSageOneDbContext).AsImplementedInterfaces().As<System.Data.Entity.DbContext>().InstancePerLifetimeScope();
        }

       // private static ProjectBlanketContext CreateSageOneDbContext(IComponentContext context)
       // {
         //  var projectBlanketContext = new ProjectBlanketContext();
         //
         //  var lazyDbContextWrapper = context.Resolve<LazyDbContextWrapper>();
         //  lazyDbContextWrapper.IsDbContextActivated = true;
         //  return projectBlanketContext;
        //}
    }
}
