﻿using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Faculty.API.Migrations
{
    /// <inheritdoc />
    public partial class RemoveCourseNumberFromGroup : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CourseNumber",
                table: "Groups");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CourseNumber",
                table: "Groups",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }
    }
}
