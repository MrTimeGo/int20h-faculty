using Faculty.API.Context;
using Faculty.API.Dto;
using Faculty.API.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Faculty.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController(StudentService service, FacultyContext context) : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<StudentShortDto>>> GetStudentsShort([FromQuery] string? searchTerm, [FromQuery] List<string> groups)
        {
            return await service.GetStudentShortDto(searchTerm, groups);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<StudentDetailedDto>> GetStudentDetailed([FromRoute] Guid id)
        {
            var student = await service.GetDetailedStudent(id);

            return student is not null ? Ok(student) : NotFound();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAdditionalInfo([FromRoute] Guid id, [FromBody] UpdateAdditionalInfoDto dto)
        {
            var student = await context.Students.FirstOrDefaultAsync(s => s.Id == id);

            if (student is null)
            {
                return NotFound();
            }

            student.Activities = dto.AdditionalInfo;

            context.Update(student);
            await context.SaveChangesAsync();
            return Ok();    
        }
    }
}
