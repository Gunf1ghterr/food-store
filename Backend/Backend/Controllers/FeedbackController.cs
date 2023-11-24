using Backend.DataModeles;
using Backend.Helpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    public class FeedbackController: ControllerBase
    {


        [HttpGet("api/feedback/get")]
        public IActionResult GetFeedbacks()
        {
            try
            {
                List<Feedback> feedbacks = new List<Feedback>();
                using(var cont = new ContextDataBase())
                {
                    feedbacks = cont.feedbacks.Include(f => f.Customer).ToList();
                }
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
                return BadRequest(ex.Message);
            }
            
        }
        
        [HttpPost("api/feedback/create")]
        public IActionResult CreateFeedback([FromForm] string feedbackMessage, [FromForm] IFormFile feedbackImage, [FromForm] string userId)
        {
            try
            {
                using (var cont = new ContextDataBase())
                {
                    var userIdInt = Convert.ToInt32(userId);
                    Customer customer;
                
                    
                    if (userIdInt > 0)
                    {
                    customer = cont.customers.FirstOrDefault(c => c.Id == userIdInt);

                    }
                    else
                    {
                        return BadRequest("Некорректный Id пользователя.");
                    }
                

                if (customer == null)
                {
                        return NotFound("Нет такого пользователя.");
                } else
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
                        Date = DateTime.Now,
                    };
                        cont.feedbacks.Add(feedback);
                        cont.SaveChanges();

                        return Ok(feedback);
                }
                }
            } catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            
        }
    }
}
