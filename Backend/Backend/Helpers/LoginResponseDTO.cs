using Backend.DataModeles;

namespace Backend.Helpers
{
    public class LoginResponseDTO
    {
        public Customer User { get; set; }
        public string Token { get; set; }
    }
}
