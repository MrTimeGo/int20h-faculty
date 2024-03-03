using Faculty.API.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Faculty.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LessonController(FacultyContext context) : ControllerBase
    {
        [HttpGet("{id}")]
        public async Task<ActionResult<string>> GetLessonName(Guid id)
        {
            var lessonName = await context.Lessons.Where(l => l.Id == id).Select(l => l.Name).FirstOrDefaultAsync();
            if(lessonName == null)
            {
                return NotFound();
            }
            return Ok(lessonName);
        }
    }
}
