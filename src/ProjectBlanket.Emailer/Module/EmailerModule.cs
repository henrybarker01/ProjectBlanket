using Autofac;

namespace ProjectBlanket.Emailer.Module
{
   public class EmailerModule : Autofac.Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterType<Emailer>().As<IEmailer>();
        }
    }
}
