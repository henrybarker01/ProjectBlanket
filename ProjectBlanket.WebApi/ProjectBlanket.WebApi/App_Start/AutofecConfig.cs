using System.Reflection;
using System.Web.Http;
using Autofac;
using Autofac.Integration.WebApi;
using ProjectBlanket.DataAccess.Module;
using ProjectBlanket.Service.Module;

namespace ProjectBlanket.WebApi
{
    public static class AutofacConfig
    {
        public static IContainer ConfigureAutofac()
        {
            var container = CreateContainer();
            GlobalConfiguration.Configuration.DependencyResolver = new AutofacWebApiDependencyResolver(container);
            return container;
        }

        private static IContainer CreateContainer()
        {
            var builder = new ContainerBuilder();
            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());
            RegisterModules(builder);
            return builder.Build();
        }

        public static void RegisterModules(ContainerBuilder builder)
        {
            builder.RegisterModule<ProjectBlanketContextModule>();
            builder.RegisterModule<RepositoriesModule>(); 
            builder.RegisterModule<ServicesModule>();
        }
    }
}