using Faculty.API.Context;
using Faculty.API.Dto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace Faculty.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkController(FacultyContext context) : ControllerBase
    {
        [HttpGet("{lessonId}")]
        public async Task<List<WorkShortInfo>> GetWorksByLessonId(Guid lessonId)
        {
            return await context.Works.Where(w => w.LessonId == lessonId).Select(w => new WorkShortInfo
            {
                Id = w.Id,
                Name = w.Name,
                Deadline = w.Deadline,
                Type = w.Type
            }).ToListAsync();
        }
    }
}
