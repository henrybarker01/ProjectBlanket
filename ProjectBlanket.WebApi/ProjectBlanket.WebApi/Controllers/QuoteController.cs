using ProjectBlanket.DataAccess.Entities;
using ProjectBlanket.Service.Contracts.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace ProjectBlanket.WebApi.Controllers
{
    [AllowAnonymous]
    [RoutePrefix("api/quote")]
    public class QuoteController : ApiController
    {
        private readonly IQuoteService _quoteService;
        public QuoteController(IQuoteService quoteService)
        {
            _quoteService = quoteService;
        }

        [HttpPost, Route("AddQuote")]
        public async Task<Guid> AddQuote([FromBody] Quote quote) =>
           await _quoteService.AddQuote(quote);


    }
}
