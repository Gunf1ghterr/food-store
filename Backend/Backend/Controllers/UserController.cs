using Backend.DataModeles;
using Backend.Helpers;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;
using System.Security.Claims;

namespace Backend.Controllers
{
    public class UserController : ControllerBase
    {
        private readonly IDbContext _dbContext;

        public UserController(IDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [CustomAuthorization]
        [HttpDelete("api/user/delete")]
        public IActionResult DeleteUser([FromQuery] string userId)
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

                int userIdInt = Convert.ToInt32(userId);
                var userToDelete = _dbContext.customers.FirstOrDefault(c => c.Id == userIdInt);


                if (userToDelete != null)
                {
                    _dbContext.customers.Remove(userToDelete);
                    _dbContext.SaveChanges();
                    Response.Cookies.Delete("token");
                    return Ok("Пользователь успешно удален.");
                }
                else
                {
                    return NotFound("Пользователь не найден.");
                }

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return BadRequest("Что-то пошло не так.");
            }

        }

        [CustomAuthorization]
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
                //var auth = CheckToken.Check(Request.Cookies["token"]);

                //switch (auth)
                //{
                //    case "Пользователь авторизован.":
                //        break;
                //    case "Нет токена авторизации. Пользователь не авторизован.":
                //        return Unauthorized("Нет токена авторизации. Пользователь не авторизован.");
                //    case "Пользователь не найден.":
                //        return NotFound("Пользователь не найден.");
                //    case "Что-то пошло не так.":
                //        return BadRequest("Что-то пошло не так.");
                //    case "Нет пользователя с такими данными.":
                //        return Unauthorized("Нет пользователя с такими данными.");
                //    default:
                //        break;
                //}

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

                var user = _dbContext.customers.FirstOrDefault(u => u.Id == userIdInt);

                if (user == null)
                {
                    return NotFound("Пользователь не найдет.");
                }

                var existingUserWithNewMail = _dbContext.customers.FirstOrDefault(u => u.Mail == userMail && u.Id != userIdInt);

                if (existingUserWithNewMail != null)
                {
                    return BadRequest("Адрес электронной почты уже используется другим пользователем.");
                }

                user.Birthday = userBirthday;
                user.Name = userUsername;
                user.Phone = userPhone;
                user.Mail = userMail;

                _dbContext.SaveChanges();
                return Ok(user);
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

                customer = _dbContext.customers.FirstOrDefault(c => c.Mail == regMailInput);

                if (customer != null)
                {
                    return Conflict("Такой пользователь существует.");
                }
                else
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

                    _dbContext.customers.Add(newCustomer);
                    _dbContext.SaveChanges();
                    DotNetEnv.Env.Load();
                    var secret = Environment.GetEnvironmentVariable("Secret");
                    LoginResponseDTO loginResponseDTO = await LoginHelper.ExecuteLogin(newCustomer, secret);
                    Response.Cookies.Append("token", loginResponseDTO.Token, new CookieOptions
                    {
                        HttpOnly = true,
                        Expires = DateTime.Now.AddDays(1),
                    });

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

                customer = _dbContext.customers.FirstOrDefault(c => c.Mail == loginMailInput &&
                c.Password == HashPasswordHelper.HashPassword(loginPasswordInput));

                if (customer == null)
                {
                    return NotFound("Пользователь не найден!");
                }
                else
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

                    int userIdInt = Convert.ToInt32(userId);
                    var currentUser = _dbContext.customers.FirstOrDefault(c => c.Id == userIdInt);

                    if (currentUser != null)
                    {
                        return Ok(currentUser);
                    }
                    else
                    {
                        return NotFound("Пользователь не найден.");
                    }

                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                    return BadRequest("Что-то пошло не так.");
                }
            }
            else
            {
                return Unauthorized("Нет пользователя с такими данными.");
            }
        }

    }
}
