using Backend.DataModeles;
using Backend.Helpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace Backend.Controllers
{
    public class FeedbackController : ControllerBase
    {
        private readonly IDbContext _dbContext;

        public FeedbackController(IDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet("api/feedback/get")]
        public IActionResult GetFeedbacks([FromQuery] int skip, [FromQuery] int limit = 10)
        {
            try
            {
                List<Feedback> feedbacks = new List<Feedback>();

                feedbacks = _dbContext.feedbacks.Include(f => f.Customer)
                                    .OrderByDescending(f => f.Date)
                                    .Skip(skip)
                                    .Take(limit)
                                    .ToList();

                var feedbacksDTO = feedbacks.Select(f => new FeedbackDTO
                {
                    FeedbackId = f.Id,
                    Message = f.message,
                    Image = f.Image,
                    Date = f.Date,
                    UserId = f.Customer_Id,
                    UserName = f.Customer.Name

                }).ToList();
                return Ok(feedbacksDTO);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest("Что-то пошло не так.");
            }

        }

        [CustomAuthorization]
        [HttpPost("api/feedback/create")]
        public IActionResult CreateFeedback([FromForm] string feedbackMessage, [FromForm] IFormFile feedbackImage, [FromForm] string userId)
        {
            try
            {
                var token = Request.Cookies["token"];
                DotNetEnv.Env.Load();
                var secret = Environment.GetEnvironmentVariable("Secret");
                if (token == null)
                {
                    return Unauthorized("Нет токена авторизации. Пользователь не авторизован.");
                }
                var userIdClaim = LoginHelper.GetClaimFromToken(token, secret, ClaimTypes.Name);
                if (userIdClaim.Value != userId)
                {
                    return Unauthorized("Нет доступа.");
                }

                var userIdInt = Convert.ToInt32(userId);
                Customer customer;


                if (userIdInt > 0)
                {
                    customer = _dbContext.customers.FirstOrDefault(c => c.Id == userIdInt);

                }
                else
                {
                    return BadRequest("Некорректный Id пользователя.");
                }


                if (customer == null)
                {
                    return NotFound("Нет такого пользователя.");
                }
                else
                {
                    var fullFilePathForDB = "";
                    if (feedbackImage != null && feedbackImage.Length > 0)
                    {
                        var uploadsFolder = Path.Combine(Directory.GetCurrentDirectory(), "Uploads");
                        var uniqueFileName = "feedback_image_" + Guid.NewGuid().ToString() + "_" + feedbackImage.FileName;
                        var filePath = Path.Combine(uploadsFolder, uniqueFileName);

                        using (var stream = new FileStream(filePath, FileMode.Create))
                        {
                            feedbackImage.CopyTo(stream);
                        }
                        fullFilePathForDB = uniqueFileName;
                    }

                    Feedback feedback = new Feedback()
                    {
                        Customer = customer,
                        message = feedbackMessage,
                        Image = fullFilePathForDB,
                        Date = DateTime.Now.AddHours(3),
                    };
                    _dbContext.feedbacks.Add(feedback);
                    _dbContext.SaveChanges();

                    return Ok(feedback);
                }

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest("Что-то пошло не так.");
            }

        }
    }
}
