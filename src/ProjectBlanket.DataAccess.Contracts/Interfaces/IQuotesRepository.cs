using System;
using System.Threading.Tasks;
using ProjectBlanket.DataAccess.Entities;

namespace ProjectBlanket.DataAccess.Contracts.Interfaces
{
    public interface IQuotesRepository
    {
        Task<Quote> GetQuoteById(Guid id);
    }
}
