using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Helpers
{
    public class CustomAuthorizationAttribute : Attribute, IAuthorizationFilter
    {
        public void OnAuthorization(AuthorizationFilterContext context)
        {
            var auth = CheckToken.Check(context.HttpContext.Request.Cookies["token"]);

            switch (auth)
            {
                case "Пользователь авторизован.":
                    break;
                case "Нет токена авторизации. Пользователь не авторизован.":
                    context.Result = new UnauthorizedObjectResult("Нет токена авторизации. Пользователь не авторизован.");
                    break;
                case "Пользователь не найден.":
                    context.Result = new NotFoundObjectResult("Пользователь не найден.");
                    break;
                case "Что-то пошло не так.":
                    context.Result = new BadRequestObjectResult("Что-то пошло не так.");
                    break;
                case "Нет пользователя с такими данными.":
                    context.Result = new UnauthorizedObjectResult("Нет пользователя с такими данными.");
                    break;
                default:
                    break;
            }
        }
    }
}
