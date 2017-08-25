using System.Data.Entity;
using ProjectBlanket.DataAccess.Entities;

namespace ProjectBlanket.DataAccess.DbContext
{
    public class ProjectBlanketContext :   System.Data.Entity.DbContext
    {

        public ProjectBlanketContext(): base("ProjectBlanketConnectionString")
        {

        }

        
        public DbSet<Quote> Quotes { get; set; }
    }
}
