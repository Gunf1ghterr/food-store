using System.ComponentModel.DataAnnotations;

namespace Backend.DataModeles
{
    public class Order
    {
        public int Id { get; set; }
        public int Customer_Id { get; set; }
        public DateTime Date { get; set; }
        public string Status { get; set; }
        [MaxLength(200)]
        public string Adres { get; set; }
        public int Total { get; set; }
        [MaxLength(200)]
        public string? Comment { get; set; }
        [MaxLength(50)]
        public string? Payment { get; set; }
        [MaxLength(50)]
        public string Recipient { get; set; }
        [MaxLength(25)]
        public string? Recipient_phone { get; set; }

        public Customer Customer { get; set; }

        public ICollection<ProductList> ProdLists { get; set; }
    }
}
