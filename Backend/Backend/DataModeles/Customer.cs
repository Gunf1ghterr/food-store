using System.ComponentModel.DataAnnotations;

namespace Backend.DataModeles
{
    public class Customer 
    {
        public int Id { get; set; }
        [MaxLength(50)]
        public string Name { get; set; }
        public DateTime Date { get; set; }
        [MaxLength(50)]
        public string Mail { get; set; }
        [MaxLength(50)]
        public string Phone { get; set; }
        [MaxLength(25)]
        public string Birthday { get; set; }
        public ICollection<Feedback> Feedbacks { get; set; }
        public ICollection<Order> Orders { get; set; }
    }
}
