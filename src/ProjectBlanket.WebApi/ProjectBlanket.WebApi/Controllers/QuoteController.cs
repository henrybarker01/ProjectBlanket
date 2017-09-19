using ProjectBlanket.DataAccess.Entities;
using ProjectBlanket.Service.Contracts.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using ProjectBlanket.WebApi.Models.Quote;

namespace ProjectBlanket.WebApi.Controllers
{

    [RoutePrefix("api/quote")]
    public class QuoteController : BaseApiController
    {
        private readonly IQuoteService _quoteService;
        public QuoteController(IQuoteService quoteService)
        {
            _quoteService = quoteService;
        }

        [HttpPost, Route("AddQuote")]
        public async Task<Guid> AddQuote([FromBody] Quote quote) =>
           await _quoteService.AddQuote(quote);

        [HttpGet, Route("list")]
        public async Task<List<QuoteListModel>> List() =>
            (await _quoteService.List()).Select(x => new QuoteListModel()
            {
                Id = x.Id,
                QuoteNumber = x.QuteNumber
            }).ToList();
    }
}
