using Faculty.API.Context;
using Faculty.API.Dto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace Faculty.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorksController(FacultyContext context) : ControllerBase
    {
        [HttpGet("subject/{lessonId}")]
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

        [HttpGet("{:id}")]
        public async Task<ActionResult<WorkDetailedInfoDto>> GetDetailedDto([FromRoute] Guid id)
        {
            var work = await context.Works.Select(w => new WorkDetailedInfoDto()
            {
                Description = w.Description,
                Deadline = w.Deadline,
                Type = w.Type,
                Name = w.Name,
                Id = w.Id
            }).FirstOrDefaultAsync(w => w.Id == id);

            return work is not null ? Ok(work) : NotFound();
        }
    }
}
