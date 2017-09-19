using AutoMapper;
using ProjectBlanket.DataAccess.Entities;
using ProjectBlanket.Service.Contracts.Models.Quote;

namespace ProjectBlanket.AutoMapper.MappingProfiles
{
  public  class QuoteMappingProfile : Profile
    {
        public QuoteMappingProfile()
        {
            CreateMap<Quote, QuoteListModel>();
           }
    }
}
