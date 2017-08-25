using ProjectBlanket.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjectBlanket.Service.Contracts.Interfaces
{
   public interface  IQuoteService
   {
       Task<Guid> AddQuote(Quote quote);
   }
}
