using Backend.DataModeles;
using Microsoft.EntityFrameworkCore;

namespace Backend
{
    public class ContextDataBase : DbContext
    {
        public DbSet<User> users { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // Для миграции писать в соединении "localhost,1433" !!!!!;
            optionsBuilder.UseSqlServer("Server=db,1433;Database=Test;User Id=sa;Password=Roman221510;Encrypt=False;");

        }
    }
}
