using System;
using System.Threading.Tasks;
using ProjectBlanket.DataAccess.DbContext;
using ProjectBlanket.DataAccess.Entities;
using ProjectBlanket.DataAccess.Contracts.Interfaces;

namespace ProjectBlanket.DataAccess.Repositories
{
    public class QuotesRepository : IQuotesRepository
    {
        private readonly ProjectBlanketContext _dbContext;

        public QuotesRepository(ProjectBlanketContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<Quote> GetQuoteById(Guid id) =>
          await _dbContext.Quotes.FindAsync(id);

        public async Task<Guid> AddQuote(Quote quote)
        {

            _dbContext.Quotes.Add(quote);
            await _dbContext.SaveChangesAsync();
            return quote.Id;

        }
    }
}