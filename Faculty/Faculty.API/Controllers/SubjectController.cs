using Faculty.API.Context;
using Faculty.API.Dto;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Faculty.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubjectController(FacultyContext context) : ControllerBase
    {
        [HttpGet("{id}")]
        public async Task<ActionResult<string>> GetSubjectName(Guid id)
        {
            var lessonName = await context.Subjects.Where(l => l.Id == id).Select(l => l.Name).FirstOrDefaultAsync();
            if(lessonName == null)
            {
                return NotFound();
            }
            return Ok(lessonName);
        }

        [HttpGet]
        public async Task<ActionResult<List<SubjectShortDto>>> GetSubjectShort()
        {
            return await context.Subjects.Select(s=>new SubjectShortDto {
                Id = s.Id, 
                Name = s.Name, 
                Groups = s.Groups.Select(g=>g.Code).ToList() 
            })
                .ToListAsync();
        }

        [HttpPost]
        public async Task<IActionResult> CreateSubject(SubjectShortWithoutId subject)
        {
            var createdSubject = context.Subjects.Add(new Entities.Subject
            {
                Name = subject.Name,
                Groups = subject.Groups.Select(g => new Entities.Group
                {
                    Code = g
                }).ToList()
            });
            await context.SaveChangesAsync();
            return Ok();
        }
    }
}
