using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class cascad : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_orders_customers_Customer_Id",
                table: "orders");

            migrationBuilder.AddForeignKey(
                name: "FK_orders_customers_Customer_Id",
                table: "orders",
                column: "Customer_Id",
                principalTable: "customers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_orders_customers_Customer_Id",
                table: "orders");

            migrationBuilder.AddForeignKey(
                name: "FK_orders_customers_Customer_Id",
                table: "orders",
                column: "Customer_Id",
                principalTable: "customers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
