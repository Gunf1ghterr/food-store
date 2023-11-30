using Backend.DataModeles;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    public class OfferController : ControllerBase
    {
        [Route("api/offers")]
        [HttpGet]
        public IActionResult GetOffers()
        {
            try
            {
                List<Offer> offers = new List<Offer>();
                using (var cont = new ContextDataBase())
                {
                    offers = cont.offers.ToList();
                }
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
