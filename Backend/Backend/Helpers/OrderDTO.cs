using Backend.DataModeles;
using Microsoft.EntityFrameworkCore.Internal;

namespace Backend.Helpers
{
    public class OrderDTO
    {
        public Order order { get; set; }

        public ICollection<Product> items { get; set; }
    }
}
