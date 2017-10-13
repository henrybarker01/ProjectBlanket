using System.Data.Entity;
using ProjectBlanket.DataAccess.Entities;
using ProjectBlanket.DataAccess.Entities.Entities;

namespace ProjectBlanket.DataAccess.DbContext
{
    public class ProjectBlanketContext : System.Data.Entity.DbContext
    {

        public ProjectBlanketContext() : base("ProjectBlanketConnectionString")
        {

        }

        public DbSet<Quote> Quotes { get; set; }
        public DbSet<Equipment> Equipment { get; set; }
        public DbSet<Calibration> Calibration { get; set; }
        public DbSet<Widget> Widget { get; set; }
    }
}