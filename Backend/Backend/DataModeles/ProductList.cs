namespace Backend.DataModeles
{
    public class ProductList
    {
        public int Order_Id { get; set; }
        public int Product_Id { get; set; }
        public int count { get; set; }
        [Newtonsoft.Json.JsonIgnore]
        [System.Text.Json.Serialization.JsonIgnore]
        public Product Product { get; set; }
        [Newtonsoft.Json.JsonIgnore]
        [System.Text.Json.Serialization.JsonIgnore]
        public Order Order { get; set; }

    }
}
