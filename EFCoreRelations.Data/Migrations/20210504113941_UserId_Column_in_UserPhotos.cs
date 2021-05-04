using Microsoft.EntityFrameworkCore.Migrations;

namespace EFCoreRelations.Data.Migrations
{
    public partial class UserId_Column_in_UserPhotos : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserPhotos_AspNetUsers_UserId1",
                table: "UserPhotos");

            migrationBuilder.DropIndex(
                name: "IX_UserPhotos_UserId1",
                table: "UserPhotos");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "UserPhotos");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "UserPhotos",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.CreateIndex(
                name: "IX_UserPhotos_UserId",
                table: "UserPhotos",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_UserPhotos_AspNetUsers_UserId",
                table: "UserPhotos",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserPhotos_AspNetUsers_UserId",
                table: "UserPhotos");

            migrationBuilder.DropIndex(
                name: "IX_UserPhotos_UserId",
                table: "UserPhotos");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "UserPhotos",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.AddColumn<string>(
                name: "UserId1",
                table: "UserPhotos",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_UserPhotos_UserId1",
                table: "UserPhotos",
                column: "UserId1");

            migrationBuilder.AddForeignKey(
                name: "FK_UserPhotos_AspNetUsers_UserId1",
                table: "UserPhotos",
                column: "UserId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
