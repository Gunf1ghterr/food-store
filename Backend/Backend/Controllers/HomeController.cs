using Backend.DataModeles;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/users")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetUsers()
        {
            var user = new[]
            {
                new {name = "oleg"},
                new {name = "ivan"}
            };

            //using (var cont = new ContextDataBase())
            //{
            //    var NewStatus = new Status
            //    {
            //        Name = "test"
            //    };

            //    cont.statuses.Add(NewStatus);
            //    cont.SaveChanges();
            //}


            return Ok(user);
        }
    }
}
