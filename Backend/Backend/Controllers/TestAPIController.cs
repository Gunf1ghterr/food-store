using Microsoft.AspNetCore.Mvc;
using System.Text;
using System.Text.Json.Serialization;
using Newtonsoft.Json;
using Backend.DataModeles;

namespace Backend.Controllers
{
    [Route("api/test")]
    [ApiController]
    public class TestAPIController : ControllerBase
    {
        [HttpPost]
        public async Task<IActionResult> Index()
        {
            using (var reader = new StreamReader(Request.Body))
            {
                var requestBody = await reader.ReadToEndAsync();

                System.Console.WriteLine(requestBody);
            }

            List<Product> products = new List<Product>();
            using (var cont = new ContextDataBase())
            {
                products = cont.products.ToList();
            }
            Console.WriteLine(products.Count);
            return Ok();
        }
    }
}
