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

        //[HttpGet]
        //public async Task<ActionResult<SubjectShortDto>> GetSubjectShort()
        //{
        //    context.Subjects
        //}
    }
}
