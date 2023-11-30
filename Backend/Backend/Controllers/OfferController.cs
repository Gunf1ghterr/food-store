using Backend.DataModeles;
using Backend.Helpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;

namespace Backend.Controllers
{
    public class OfferController : ControllerBase
    {
        private readonly IMemoryCache _memoryCache;
        private readonly IDbContext _DbContext;

        public OfferController(IMemoryCache memoryCache, IDbContext DbContext)
        {
            _memoryCache = memoryCache;
            _DbContext = DbContext;
        }

        [Route("api/offers")]
        [HttpGet]
        public IActionResult GetOffers()
        {
            try
            {
                if (_memoryCache.TryGetValue("Offers", out List<Offer> cachedOffers))
                {
                    return Ok(cachedOffers);
                }
                List<Offer> offers = new List<Offer>();
                offers = _DbContext.offers.ToList();
                _memoryCache.Set("Offers", offers, TimeSpan.FromDays(1));
                return Ok(offers);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest("Что-то пошло не так.");
            }


        }
    }
}
