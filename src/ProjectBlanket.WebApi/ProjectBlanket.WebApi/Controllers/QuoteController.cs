using ProjectBlanket.DataAccess.Entities;
using ProjectBlanket.Service.Contracts.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using AutoMapper;
using ProjectBlanket.Service.Contracts.Models.Quote;

namespace ProjectBlanket.WebApi.Controllers
{

    [RoutePrefix("api/quote")]
    public class QuoteController : BaseApiController
    {
        private readonly IQuoteService _quoteService;
        public QuoteController(IQuoteService quoteService, IMapper mapper) : base(mapper)
        {
            _quoteService = quoteService;
        }

        [HttpPost, Route("AddQuote")]
        public async Task<Guid> AddQuote([FromBody] Quote quote) =>
           await _quoteService.AddQuote(quote);

        [HttpGet, Route("list")]
        public async Task<List<QuoteListModel>> List()
        {
            var result = await _quoteService.List();
            return Map<List<QuoteListModel>>(result);

        }
    }
}
