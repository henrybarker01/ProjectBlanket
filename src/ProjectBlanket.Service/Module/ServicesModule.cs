using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Autofac;
using ProjectBlanket.Service.Services;

namespace ProjectBlanket.Service.Module
{
    public class ServicesModule : Autofac.Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterType<QuoteService>().AsImplementedInterfaces();
        }
    }
}