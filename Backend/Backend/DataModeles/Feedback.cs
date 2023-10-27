using System.ComponentModel.DataAnnotations;

namespace Backend.DataModeles
{
    public class Feedback
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public int Customer_Id { get; set; }
        public string message { get; set; }
        [MaxLength(50)]
        public string Image { get; set; }

        public Customer Customer { get; set; }
    }
}
