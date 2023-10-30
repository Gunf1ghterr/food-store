namespace Backend.DataModeles
{
    public class ProductList
    {
        public int Order_Id { get; set; }
        public int Product_Id { get; set; }
        public int count { get; set; }
        public Product Product { get; set; }
        public Order Order { get; set; }

    }
}
