using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class deletestatustable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_orders_statuses_Status_Id",
                table: "orders");

            migrationBuilder.DropTable(
                name: "statuses");

            migrationBuilder.DropIndex(
                name: "IX_orders_Status_Id",
                table: "orders");

            migrationBuilder.DropColumn(
                name: "Status_Id",
                table: "orders");

            migrationBuilder.AddColumn<string>(
                name: "Status",
                table: "orders",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Status",
                table: "orders");

            migrationBuilder.AddColumn<int>(
                name: "Status_Id",
                table: "orders",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "statuses",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_statuses", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_orders_Status_Id",
                table: "orders",
                column: "Status_Id");

            migrationBuilder.AddForeignKey(
                name: "FK_orders_statuses_Status_Id",
                table: "orders",
                column: "Status_Id",
                principalTable: "statuses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
