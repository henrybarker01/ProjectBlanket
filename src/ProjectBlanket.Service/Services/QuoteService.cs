using ProjectBlanket.DataAccess.Contracts.Interfaces;
using ProjectBlanket.DataAccess.Entities;
using ProjectBlanket.Service.Contracts.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjectBlanket.Service.Services
{
    public class QuoteService : IQuoteService
    {

        private readonly IQuotesRepository _quoteReporitory;
        public QuoteService(IQuotesRepository quoteReporitory)
        {
            _quoteReporitory = quoteReporitory;
        }

        public async Task<Guid> AddQuote(Quote quote) =>
           await _quoteReporitory.AddQuote(quote);

        public async Task<List<Quote>> List() =>
            await _quoteReporitory.List();
    }
}
