namespace ProjectBlanket.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class EquipmentAndCalibrations : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Equipments", "CalibrationId", "dbo.Calibrations");
            DropIndex("dbo.Equipments", new[] { "CalibrationId" });
            AddColumn("dbo.Calibrations", "CalibrationDate", c => c.DateTime(nullable: false));
            AddColumn("dbo.Calibrations", "CalibrationDue", c => c.DateTime(nullable: false));
            AddColumn("dbo.Calibrations", "EquipmentId", c => c.Guid(nullable: false));
            CreateIndex("dbo.Calibrations", "EquipmentId");
            AddForeignKey("dbo.Calibrations", "EquipmentId", "dbo.Equipments", "Id", cascadeDelete: true);
            DropColumn("dbo.Calibrations", "DateCalibrated");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Calibrations", "DateCalibrated", c => c.DateTime(nullable: false));
            DropForeignKey("dbo.Calibrations", "EquipmentId", "dbo.Equipments");
            DropIndex("dbo.Calibrations", new[] { "EquipmentId" });
            DropColumn("dbo.Calibrations", "EquipmentId");
            DropColumn("dbo.Calibrations", "CalibrationDue");
            DropColumn("dbo.Calibrations", "CalibrationDate");
            CreateIndex("dbo.Equipments", "CalibrationId");
            AddForeignKey("dbo.Equipments", "CalibrationId", "dbo.Calibrations", "Id", cascadeDelete: true);
        }
    }
}
