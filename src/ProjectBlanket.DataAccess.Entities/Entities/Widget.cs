using System;
using ProjectBlanket.DataAccess.Core.Entities;

namespace ProjectBlanket.DataAccess.Entities.Entities
{
   public  class Widget : EntityBase
    {
       public string Name { get; set; }
        public string Description { get; set; }
        public int Cols { get; set; }
        public int Rows { get; set; }
        public int Y { get; set; }
        public int X { get; set; }
        public Guid UserId { get; set; }
    }
}
