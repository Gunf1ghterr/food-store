using System.ComponentModel.DataAnnotations;

namespace Backend.DataModeles
{
    public class Product
    {
        public int Id { get; set; }
        public int Price { get; set; }
        [MaxLength(50)]
        public string Name { get; set; }
        public string Description { get; set; }
        [MaxLength(50)]
        public string Category { get; set; }
        [MaxLength(50)]
        public string Image { get; set; }
        public DateTime Date { get; set; }

        public ICollection<ProductList> ProductLists { get; set; }
    }
}
