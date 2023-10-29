using System.ComponentModel.DataAnnotations;

namespace Backend.DataModeles
{
    public class Status
    {
        public int Id { get; set; }

        [MaxLength(50)]
        public string Name { get; set; }

        public ICollection<Order> Orders { get; set; }
    }
}
