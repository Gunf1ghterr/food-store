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

            return Ok(user);
        }
    }
}
