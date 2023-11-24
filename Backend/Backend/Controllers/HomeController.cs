using Backend.DataModeles;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/products")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetProducts()
        {

            try
            {
                List<Product> products = new List<Product>();
                using (var cont = new ContextDataBase())
                {
                    products = cont.products.ToList();
                }


                return Ok(products);
            }
            catch(Exception ex)
            {
                return BadRequest(ex);
            }
            
        }
    }
}
