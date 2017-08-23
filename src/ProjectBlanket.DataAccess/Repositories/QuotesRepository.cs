using System;
using System.Threading.Tasks;
using ProjectBlanket.DataAccess.DbContext;
using ProjectBlanket.DataAccess.Entities;

namespace ProjectBlanket.DataAccess.Repositories
{
    public class QuotesRepository
    {
        private readonly ProjectBlanketContext _dbContext;

        public QuotesRepository(ProjectBlanketContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<Quote> GetQuoteById(Guid id) =>
          await _dbContext.Quotes.FindAsync(id);

    }
}
