using Backend.DataModeles;
using Microsoft.EntityFrameworkCore;

namespace Backend.Helpers
{
    public interface IDbContext
    {
        DbSet<Customer> customers { get; set; }
        DbSet<Feedback> feedbacks { get; set; }
        DbSet<Offer> offers { get; set; }
        DbSet<Order> orders { get; set; }
        DbSet<ProductList> productLists { get; set; }
        DbSet<Product> products { get; set; }

        public int SaveChanges();
    }
}
