using Newtonsoft.Json;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using ProjectBlanket.WebApi.DBContext;

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

    public class BaseApiController : ApiController
    {
        public HttpResponseMessage Options()
        {
            return new HttpResponseMessage { StatusCode = HttpStatusCode.OK };
        }
    }
}
