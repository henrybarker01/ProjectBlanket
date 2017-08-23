using System;

namespace ProjectBlanket.DataAccess.DbContext
{
    public class LazyDbContextWrapper
    {
        private readonly Lazy<Microsoft.EntityFrameworkCore.DbContext> _dbContext;

        public LazyDbContextWrapper(Lazy<Microsoft.EntityFrameworkCore.DbContext> dbContext)
        {
            _dbContext = dbContext;
        }

        public bool IsDbContextActivated { private get; set; }

        public Microsoft.EntityFrameworkCore.DbContext GetDbContext()
        {
            return IsDbContextActivated ? _dbContext.Value : null;
        }
    }
}
