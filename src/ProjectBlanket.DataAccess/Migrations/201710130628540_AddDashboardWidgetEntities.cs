namespace ProjectBlanket.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddDashboardWidgetEntities : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Widgets",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        Name = c.String(),
                        Description = c.String(),
                        Cols = c.Int(nullable: false),
                        Rows = c.Int(nullable: false),
                        Y = c.Int(nullable: false),
                        X = c.Int(nullable: false),
                        UserId = c.Guid(nullable: false),
                        CreatedAt = c.DateTime(nullable: false),
                        CreatedBy = c.String(),
                        UpdatedAt = c.DateTime(),
                        UpdatedBy = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            DropColumn("dbo.Equipments", "CalibrationId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Equipments", "CalibrationId", c => c.Guid(nullable: false));
            DropTable("dbo.Widgets");
        }
    }
}
