using Backend.DataModeles;
using Backend.Helpers;
using Microsoft.EntityFrameworkCore;

namespace Backend
{
    public class ContextDataBase : DbContext, IDbContext
    {
        public DbSet<Customer> customers { get; set; }
        public DbSet<Feedback> feedbacks { get; set; }
        public DbSet<Offer> offers { get; set; }
        public DbSet<Order> orders { get; set; }
        public DbSet<ProductList> productLists { get; set; }
        public DbSet<Product> products { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            DotNetEnv.Env.Load();

            var ConnectionString = Environment.GetEnvironmentVariable("ConnectionString");

            // Для миграции писать в соединении "localhost,1433" !!!!!;
            optionsBuilder.UseSqlServer(ConnectionString);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Feedback>().HasOne(d => d.Customer).WithMany(d => d.Feedbacks).HasForeignKey(d => d.Customer_Id);
            modelBuilder.Entity<Order>().HasOne(d => d.Customer).WithMany(o => o.Orders).HasForeignKey(o => o.Customer_Id);
            modelBuilder.Entity<ProductList>().HasKey(pl => new { pl.Product_Id, pl.Order_Id });
            modelBuilder.Entity<ProductList>().HasOne(pl => pl.Product).WithMany(p => p.ProductLists).HasForeignKey(pl => pl.Product_Id);
            modelBuilder.Entity<ProductList>().HasOne(pl => pl.Order).WithMany(o => o.ProdLists).HasForeignKey(pl => pl.Order_Id);
        }
    }
}
