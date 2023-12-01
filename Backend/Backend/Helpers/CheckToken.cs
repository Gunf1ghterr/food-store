using Azure.Core;
using System.Security.Claims;

namespace Backend.Helpers
{
    public class CheckToken
    {
        public static string Check(string? token)
        {
            DotNetEnv.Env.Load();
            var secret = Environment.GetEnvironmentVariable("Secret");
            if (token == null)
            {
                return ("Нет токена авторизации. Пользователь не авторизован.");
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
                            return ("Пользователь авторизован.");
                        }
                        else
                        {
                            return ("Пользователь не найден.");
                        }
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                    return ("Что-то пошло не так.");
                }
            }
            else
            {
                return ("Нет пользователя с такими данными.");
            }
        }
    }
}
