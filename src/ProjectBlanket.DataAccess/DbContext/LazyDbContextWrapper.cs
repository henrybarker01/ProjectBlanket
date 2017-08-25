using System;

namespace ProjectBlanket.DataAccess.DbContext
{
    public class LazyDbContextWrapper
    {
        private readonly Lazy<System.Data.Entity.DbContext> _dbContext;

        public LazyDbContextWrapper(Lazy<System.Data.Entity.DbContext> dbContext)
        {
            _dbContext = dbContext;
        }

        public bool IsDbContextActivated { private get; set; }

        public System.Data.Entity.DbContext GetDbContext()
        {
            return IsDbContextActivated ? _dbContext.Value : null;
        }
    }
}
