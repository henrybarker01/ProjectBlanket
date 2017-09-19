using ProjectBlanket.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ProjectBlanket.Service.Contracts.Interfaces
{
    public interface IQuoteService
    {
        Task<Guid> AddQuote(Quote quote);
        Task<List<Quote>> List();
    }
}
