namespace ProjectBlanket.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Calibrations",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        FileName = c.String(),
                        CalibrationCertificate = c.Binary(),
                        CalibrationDate = c.DateTime(nullable: false),
                        CalibrationDue = c.DateTime(nullable: false),
                        EquipmentId = c.Guid(nullable: false),
                        CreatedAt = c.DateTime(nullable: false),
                        CreatedBy = c.String(),
                        UpdatedAt = c.DateTime(),
                        UpdatedBy = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Equipments", t => t.EquipmentId, cascadeDelete: true)
                .Index(t => t.EquipmentId);
            
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
                        CreatedAt = c.DateTime(nullable: false),
                        CreatedBy = c.String(),
                        UpdatedAt = c.DateTime(),
                        UpdatedBy = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Quotes",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        QuoteNumber = c.String(),
                        CreatedAt = c.DateTime(nullable: false),
                        CreatedBy = c.String(),
                        UpdatedAt = c.DateTime(),
                        UpdatedBy = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
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
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Calibrations", "EquipmentId", "dbo.Equipments");
            DropIndex("dbo.Calibrations", new[] { "EquipmentId" });
            DropTable("dbo.Widgets");
            DropTable("dbo.Quotes");
            DropTable("dbo.Equipments");
            DropTable("dbo.Calibrations");
        }
    }
}
