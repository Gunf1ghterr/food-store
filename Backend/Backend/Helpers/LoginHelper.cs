using Backend.DataModeles;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Backend.Helpers
{
    public class LoginHelper
    {
        async static public Task<LoginResponseDTO> ExecuteLogin(Customer customer, string Secret)
        {
            DotNetEnv.Env.Load();


            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new System.Security.Claims.ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, customer.Id.ToString()),
                    new Claim(ClaimTypes.Role, customer.Role.ToString())
                }),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = new(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            Console.WriteLine(DateTime.Now.AddDays(1));
            var token = tokenHandler.CreateToken(tokenDescriptor);
            LoginResponseDTO loginResponseDTO = new LoginResponseDTO()
            {
                Token = tokenHandler.WriteToken(token),
                User = customer,
            };
            return loginResponseDTO;

        }
        public static ClaimsPrincipal GetPrincipalFromToken(string token, string secret)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(secret);

            var tokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(key),
                ValidateIssuer = false,
                ValidateAudience = false,
                ValidateLifetime = true
            };

            try
            {
                SecurityToken securityToken;
                var principal = tokenHandler.ValidateToken(token, tokenValidationParameters, out securityToken);
                return principal;
            }
            catch (SecurityTokenExpiredException)
            {
                return null;
            }
        }

        public static Claim GetClaimFromToken(string token, string secret, string claimType)
        {
            var principal = GetPrincipalFromToken(token, secret);
            return principal?.FindFirst(claimType);
        }
    }
}
