using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(ProjectBlanket.WebApi.Startup))]

namespace ProjectBlanket.WebApi
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            var container = AutofacConfig.ConfigureAutofac();
            app.UseAutofacMiddleware(container);
            ConfigureAuth(app);
        }
    }
}
