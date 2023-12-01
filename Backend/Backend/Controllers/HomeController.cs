using Backend.DataModeles;
using Backend.Helpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.Extensions.Caching.Memory;

namespace Backend.Controllers
{
    [Route("api/products")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly IMemoryCache _memoryCache;
        private readonly IDbContext _DbContext;

        public HomeController(IMemoryCache memoryCache, IDbContext DbContext)
        {
            _memoryCache = memoryCache;
            _DbContext = DbContext;
        }

        [HttpGet]
        public IActionResult GetProducts()
        {
            try
            {
                if (_memoryCache.TryGetValue("Products", out List<Product> cachedProducts))
                {
                    return Ok(cachedProducts);
                }
                List<Product> products = new List<Product>();
                products = _DbContext.products.ToList();
                _memoryCache.Set("Products", products, TimeSpan.FromDays(1));
                return Ok(products);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest("Что-то пошло не так.");
            }

        }
    }
}
