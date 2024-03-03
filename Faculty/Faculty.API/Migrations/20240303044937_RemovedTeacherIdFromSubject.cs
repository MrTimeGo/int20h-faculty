using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Faculty.API.Migrations
{
    /// <inheritdoc />
    public partial class RemovedTeacherIdFromSubject : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_GroupSubject_Lessons_SubjectsId",
                table: "GroupSubject");

            migrationBuilder.DropForeignKey(
                name: "FK_Works_Lessons_LessonId",
                table: "Works");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Lessons",
                table: "Lessons");

            migrationBuilder.DropColumn(
                name: "TeacherId",
                table: "Lessons");

            migrationBuilder.RenameTable(
                name: "Lessons",
                newName: "Subjects");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Subjects",
                table: "Subjects",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_GroupSubject_Subjects_SubjectsId",
                table: "GroupSubject",
                column: "SubjectsId",
                principalTable: "Subjects",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Works_Subjects_LessonId",
                table: "Works",
                column: "LessonId",
                principalTable: "Subjects",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_GroupSubject_Subjects_SubjectsId",
                table: "GroupSubject");

            migrationBuilder.DropForeignKey(
                name: "FK_Works_Subjects_LessonId",
                table: "Works");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Subjects",
                table: "Subjects");

            migrationBuilder.RenameTable(
                name: "Subjects",
                newName: "Lessons");

            migrationBuilder.AddColumn<string>(
                name: "TeacherId",
                table: "Lessons",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Lessons",
                table: "Lessons",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_GroupSubject_Lessons_SubjectsId",
                table: "GroupSubject",
                column: "SubjectsId",
                principalTable: "Lessons",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Works_Lessons_LessonId",
                table: "Works",
                column: "LessonId",
                principalTable: "Lessons",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
