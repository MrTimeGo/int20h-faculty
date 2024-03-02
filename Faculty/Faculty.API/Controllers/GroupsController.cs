using Faculty.API.Context;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Faculty.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GroupsController(FacultyContext context) : ControllerBase
    {
        [HttpGet]
        public async Task<List<string>> GetGroups()
        {
            return await context.Groups.Select(g => g.Code).ToListAsync();
        }
    }
}
