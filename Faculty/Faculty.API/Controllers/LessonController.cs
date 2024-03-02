using Microsoft.AspNetCore.Mvc;

namespace Faculty.API.Controllers
{
    public class LessonController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
