using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ProjectBlanket.DataAccess.Entities;

namespace ProjectBlanket.DataAccess.Contracts.Interfaces
{
    public interface IQuotesRepository
    {
        Task<Quote> GetQuoteById(Guid id);
        Task<Guid> AddQuote(Quote quote);
        Task<List<Quote>> List();
    }
}
