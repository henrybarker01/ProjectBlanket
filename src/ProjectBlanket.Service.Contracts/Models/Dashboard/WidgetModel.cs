using System;

namespace ProjectBlanket.Service.Contracts.Models.Dashboard
{
    public class WidgetModel
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Cols { get; set; }
        public int Rows { get; set; }
        public int Y { get; set; }
        public int X { get; set; }
        public Guid UserId { get; set; }
    }
}