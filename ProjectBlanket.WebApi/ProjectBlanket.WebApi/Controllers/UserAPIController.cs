using System.Data.Entity;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using ProjectBlanket.WebApi.DBContext;

namespace Angular2MVC.Controllers
{
    [AllowAnonymous]
    [RoutePrefix("api/userapi")]
    public class UserAPIController : BaseAPIController
    {
        [HttpGet]
        public HttpResponseMessage Get()
        {
            return ToJson(UserDB.TblUsers.AsEnumerable());
        }

       public HttpResponseMessage Post([FromBody]TblUser value)
        {
            UserDB.TblUsers.Add(value);             
            return ToJson(UserDB.SaveChanges());
        }

        public HttpResponseMessage Put(int id, [FromBody]TblUser value)
        {
            UserDB.Entry(value).State = EntityState.Modified;
            return ToJson(UserDB.SaveChanges());
        }
        public HttpResponseMessage Delete(int id)
        {
            UserDB.TblUsers.Remove(UserDB.TblUsers.FirstOrDefault(x => x.Id == id));
            return ToJson(UserDB.SaveChanges());
        }
    }
}
