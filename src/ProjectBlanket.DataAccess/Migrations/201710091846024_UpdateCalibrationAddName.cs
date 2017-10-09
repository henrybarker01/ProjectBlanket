namespace ProjectBlanket.DataAccess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateCalibrationAddName : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Calibrations", "FileName", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Calibrations", "FileName");
        }
    }
}
