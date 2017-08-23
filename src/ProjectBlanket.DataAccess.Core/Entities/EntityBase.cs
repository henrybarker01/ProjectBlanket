using ProjectBlanket.DataAccess.Core.Auditing;
using System;


namespace ProjectBlanket.DataAccess.Core.Entities
{
    public abstract class EntityBase : EntityWithKey<Guid>, IAuditable
    {
        public DateTime CreatedAt { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public string UpdatedBy { get; set; }
    }
}
