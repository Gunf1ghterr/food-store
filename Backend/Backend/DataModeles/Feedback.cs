using System.ComponentModel.DataAnnotations;

namespace Backend.DataModeles
{
    public class Feedback
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public int Customer_Id { get; set; }
        public string message { get; set; }

        public string? Image { get; set; }
        [Newtonsoft.Json.JsonIgnore]
        [System.Text.Json.Serialization.JsonIgnore]
        public Customer Customer { get; set; }
    }
}
