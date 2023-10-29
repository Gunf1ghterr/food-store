using System.ComponentModel.DataAnnotations;

namespace Backend.DataModeles
{
    public class Order
    {
        public int Id { get; set; }
        public int Customer_Id { get; set; }
        public DateTime Date { get; set; }
        public int Status_Id { get; set; }
        [MaxLength(50)]
        public string Adres {  get; set; }
        public int Total { get; set; }

        public Status Status { get; set; }

        public Customer Customer { get; set; }

        public ICollection<ProductList> ProdLists { get; set; }
    }
}
