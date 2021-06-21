using Microsoft.EntityFrameworkCore.Migrations;

namespace EFCoreRelations.Data.Migrations
{
    public partial class Rooms_Column_to_RentPost_Table : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Rooms",
                table: "RentPosts",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Rooms",
                table: "RentPosts");
        }
    }
}
