namespace ProjectBlanket.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class EquipmentAndCalibration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Calibrations",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        CalibrationCertificate = c.Binary(),
                        DateCalibrated = c.DateTime(nullable: false),
                        CreatedAt = c.DateTime(nullable: false),
                        CreatedBy = c.String(),
                        UpdatedAt = c.DateTime(),
                        UpdatedBy = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Equipments",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        Name = c.String(),
                        Description = c.String(),
                        Model = c.String(),
                        SerialNumber = c.String(),
                        InitialCost = c.Decimal(nullable: false, precision: 18, scale: 2),
                        IsCalibrated = c.Boolean(nullable: false),
                        CalibrationId = c.Guid(nullable: false),
                        CreatedAt = c.DateTime(nullable: false),
                        CreatedBy = c.String(),
                        UpdatedAt = c.DateTime(),
                        UpdatedBy = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Calibrations", t => t.CalibrationId, cascadeDelete: true)
                .Index(t => t.CalibrationId);
            
            AddColumn("dbo.Quotes", "QuoteNumber", c => c.Int(nullable: false));
            DropColumn("dbo.Quotes", "QuteNumber");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Quotes", "QuteNumber", c => c.Int(nullable: false));
            DropForeignKey("dbo.Equipments", "CalibrationId", "dbo.Calibrations");
            DropIndex("dbo.Equipments", new[] { "CalibrationId" });
            DropColumn("dbo.Quotes", "QuoteNumber");
            DropTable("dbo.Equipments");
            DropTable("dbo.Calibrations");
        }
    }
}
