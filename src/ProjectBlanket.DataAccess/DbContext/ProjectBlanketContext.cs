using Microsoft.EntityFrameworkCore;
using ProjectBlanket.DataAccess.Entities;

namespace ProjectBlanket.DataAccess.DbContext
{
    public class ProjectBlanketContext : Microsoft.EntityFrameworkCore.DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=MyDatabase;Trusted_Connection=True;");
        }

        public DbSet<Quote> Quotes { get; set; }
    }
}
