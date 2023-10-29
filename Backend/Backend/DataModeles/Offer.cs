using System.ComponentModel.DataAnnotations;

namespace Backend.DataModeles
{
    public class Offer
    {
        public int Id { get; set; }

        [MaxLength(50)]
        public string Title { get; set; }

        public string Description { get; set; }

        [MaxLength(50)]
        public string Image { get; set; }
    }
}
