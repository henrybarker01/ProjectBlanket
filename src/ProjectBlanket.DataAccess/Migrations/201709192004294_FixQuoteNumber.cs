namespace ProjectBlanket.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class FixQuoteNumber : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Quotes", "QuoteNumber", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Quotes", "QuoteNumber", c => c.Int(nullable: false));
        }
    }
}