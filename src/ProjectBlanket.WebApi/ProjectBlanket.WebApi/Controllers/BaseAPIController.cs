using Newtonsoft.Json;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using ProjectBlanket.WebApi.DBContext;
using AutoMapper;

namespace ProjectBlanket.WebApi.Controllers
{
   // public class BaseAPIController : ApiController
   // {
   //     protected readonly UserBDEntitiesEntities UserDB = new UserBDEntitiesEntities();
   //     protected HttpResponseMessage ToJson(dynamic obj)
   //     {
   //         var response = Request.CreateResponse(HttpStatusCode.OK);
   //         response.Content = new StringContent(JsonConvert.SerializeObject(obj), Encoding.UTF8, "application/json");
   //         return response;
   //     }
   // }

        
    public abstract class BaseApiController : ApiController
    {
        protected readonly IMapper Mapper;

        protected BaseApiController(IMapper mapper)
        {
            Mapper = mapper;
        }
        public HttpResponseMessage Options()
        {
            return new HttpResponseMessage { StatusCode = HttpStatusCode.OK };
        }

        protected virtual TDestination Map<TDestination>(object source)
            where TDestination : class
        {
            var sourceType = source?.GetType() ?? typeof(string);
            if (typeof(TDestination).IsAssignableFrom(sourceType))
            {
                return source as TDestination;
            }
            return Mapper.Map<TDestination>(source);
        }
    }
}
