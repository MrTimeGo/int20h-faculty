using Bogus;
using Faculty.API.Context;
using Faculty.API.Dto;
using Faculty.API.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Faculty.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GradesController(FacultyContext context) : ControllerBase
    {
        [HttpGet("work/{:workId}")]
        public async Task<ActionResult<List<GradeShortDto>>> GetGradesByWorkAndStudentIds([FromRoute] Guid workId, [FromQuery] List<Guid> studentIds)
        {
            return await context.Grades
                .Where(g => g.WorkId == workId && studentIds.Contains(g.StudentId))
                .Select(g => new GradeShortDto()
                {
                    StudentId = g.StudentId,
                    Value = g.Value
                }).ToListAsync();
        }

        [HttpPost("work/{:workId}/student/{:studentId}")]
        public async Task<IActionResult> SetGrade([FromRoute] Guid workId, [FromRoute] Guid studentId, [FromBody] SetGradeDto dto)
        {
            context.Grades.Add(new Grade()
            {
                WorkId = workId,
                StudentId = studentId,
                Value = dto.Value
            });

            await context.SaveChangesAsync();

            return Ok();
        }
    }
}

