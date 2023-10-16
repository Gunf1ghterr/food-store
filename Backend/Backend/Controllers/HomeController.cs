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

            using (ContextDataBase db = new ContextDataBase())
            {
                db.users.Add(new DataModeles.User() { name = "test_from_server", description = "Плиз, пусть получиться" });
                db.SaveChanges();
            }

            return Ok(user);
        }
    }
}
