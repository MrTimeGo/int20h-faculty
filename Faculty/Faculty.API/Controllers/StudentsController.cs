using Faculty.API.Dto;
using Faculty.API.Services;
using Microsoft.AspNetCore.Mvc;

namespace Faculty.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController(StudentService service) : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<StudentShortDto>>> GetStudentsShort([FromQuery] string searchTerm, [FromQuery] List<string> groups)
        {
            return await service.GetStudentShortDto(searchTerm, groups);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<StudentDetailedDto>> GetStudentDetailed([FromRoute] Guid id)
        {
            var student = await service.GetDetailedStudent(id);

            return student is not null ? Ok(student) : NotFound();
        }
    }
}
