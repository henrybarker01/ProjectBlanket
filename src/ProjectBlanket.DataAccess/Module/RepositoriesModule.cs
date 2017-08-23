using Autofac;
using ProjectBlanket.DataAccess.Repositories;

namespace ProjectBlanket.DataAccess.Module
{
   public class RepositoriesModule: Autofac.Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterType<QuotesRepository>().AsImplementedInterfaces();
        }
    }
}
