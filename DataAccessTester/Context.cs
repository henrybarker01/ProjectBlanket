using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
 

namespace DataAccessTester
{
   public class Context :DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=localhost;Database=ProjectBlanket;User Id=sa; Password=P@ssw0rd;");
        }

        public DbSet<Quote> Quotes { get; set; }
    }

    public class Quote
    {
        [Key]
        public int Id { get; set; }
        public string ffs { get; set; }
    }
}
