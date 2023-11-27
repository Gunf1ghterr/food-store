using Backend.DataModeles;
using Backend.Helpers;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Security.Claims;

namespace Backend.Controllers
{
    public class UserController: ControllerBase
    {

        [HttpPut("api/user/update")]
        public IActionResult UpdateUserData(
        [FromForm] string userId,
        [FromForm] string userBirthday,
        [FromForm] string userUsername,
        [FromForm] string userPhone,
        [FromForm] string userMail)
        {
            try
            {
                using (var context = new ContextDataBase())
                {
                    var userIdInt = Convert.ToInt32(userId);

                    var user = context.customers.FirstOrDefault(u => u.Id == userIdInt);

                    if (user == null)
                    {
                        return NotFound("Пользователь не найдет.");
                    }

                    var existingUserWithNewMail = context.customers.FirstOrDefault(u => u.Mail == userMail && u.Id != userIdInt);

                    if (existingUserWithNewMail != null)
                    {
                        return BadRequest("Адрес электронной почты уже используется другим пользователем.");
                    }

                    user.Birthday = userBirthday;
                    user.Name = userUsername;
                    user.Phone = userPhone;
                    user.Mail = userMail;

                    context.SaveChanges();
                    return Ok(user);
                }

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest("Что-то пошло не так.");
            }
        }


        [Route("/api/user/registration")]
        [HttpPost]
         public async Task<IActionResult> Registration(
            [FromForm] string regNameInput, 
            [FromForm] string regBirthdayInput, 
            [FromForm] string regTelInput, 
            [FromForm] string regPasswordInput, 
            [FromForm] string regRole, 
            [FromForm] string regMailInput)
        {
            try
            {
                Customer customer;
                Customer newCustomer;
                using (var cont = new ContextDataBase())
                {
                    customer = cont.customers.FirstOrDefault(c => c.Mail == regMailInput);
                
                    if (customer != null)
                    {
                        return Conflict("Такой пользователь существует.");
                    } else
                    {
                        newCustomer = new Customer
                        {
                            Name = regNameInput,
                            Birthday = regBirthdayInput,
                            Phone = regTelInput,
                            Password = HashPasswordHelper.HashPassword(regPasswordInput),
                            Role = regRole,
                            Mail = regMailInput,
                            Date = DateTime.Now,
                        };

                        cont.customers.Add(newCustomer);
                        cont.SaveChanges();
                        DotNetEnv.Env.Load();
                        var secret = Environment.GetEnvironmentVariable("Secret");
                        LoginResponseDTO loginResponseDTO = await LoginHelper.ExecuteLogin(newCustomer, secret);
                        Response.Cookies.Append("token", loginResponseDTO.Token, new CookieOptions
                        {
                            HttpOnly = true,
                            Expires = DateTime.Now.AddDays(1),
                        });
                    }
                }
                return Ok(newCustomer);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest("Что-то пошло не так.");
            }
        }

        [Route("api/user/login")]
        [HttpPost]
        public async Task<IActionResult> Login([FromForm] string loginMailInput, 
            [FromForm] string loginPasswordInput)
        {
            Customer customer;
            try
            {
                using (var cont = new ContextDataBase())
                {
                    customer = cont.customers.FirstOrDefault(c => c.Mail == loginMailInput &&
                    c.Password == HashPasswordHelper.HashPassword(loginPasswordInput));

                    if (customer == null)
                    {
                        return NotFound("Пользователь не найден!");
                    } else
                    {
                        DotNetEnv.Env.Load();
                        var secret = Environment.GetEnvironmentVariable("Secret");
                        LoginResponseDTO loginResponseDTO = await LoginHelper.ExecuteLogin(customer, secret);
                        Response.Cookies.Append("token", loginResponseDTO.Token, new CookieOptions
                        {
                            HttpOnly = true,
                            Expires = DateTime.Now.AddDays(1),
                        });
                        return Ok(customer);
                    }


                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest("Что-то пошло не так.");
            }
        }

        [Route("api/user/logout")]
        [HttpGet]
        public IActionResult Logout()
        {
            Response.Cookies.Delete("token");
            return Ok();
        }

        [HttpGet("/api/user/me")]
        public IActionResult GetCurrentUser()
        {
            var token = Request.Cookies["token"];
            DotNetEnv.Env.Load();
            var secret = Environment.GetEnvironmentVariable("Secret");
            if (token == null)
            {
                return Unauthorized("Нет токена авторизации. Пользователь не авторизован.");
            }

            var userIdClaim = LoginHelper.GetClaimFromToken(token, secret, ClaimTypes.Name);
            var userRoleClaim = LoginHelper.GetClaimFromToken(token, secret, ClaimTypes.Role);
            if (userIdClaim != null && userRoleClaim != null)
            {
                var userId = userIdClaim.Value;
                var userRole = userRoleClaim.Value;

                try
                {
                    using (var cont = new ContextDataBase())
                    {
                        int userIdInt = Convert.ToInt32(userId);
                        var currentUser = cont.customers.FirstOrDefault(c => c.Id == userIdInt);

                        if (currentUser != null)
                        {
                            return Ok(currentUser);
                        }
                        else
                        {
                            return NotFound("Пользователь не найден.");
                        }
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                    return BadRequest("Что-то пошло не так.");
                }
            } else
            {
                return Unauthorized("Нет пользователя с такими данными.");
            }
        }

    }
}
