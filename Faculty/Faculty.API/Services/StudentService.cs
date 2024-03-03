using Faculty.API.Context;
using Faculty.API.Dto;
using Faculty.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Faculty.API.Services
{
    public class StudentService(FacultyContext context, UserService userService)
    {
        public async Task<List<StudentShortDto>> GetStudentShortDto(string? searchTerm, List<string> groups)
        {
            var students = await context.Students.Include(s => s.Group).Where(s => groups.Count == 0 ? true : groups.Contains(s.Group.Code)).ToListAsync();

            var userModels = new List<UserModel>();

            foreach (var student in students)
            {
                var user = await userService.GetUserById(student.UserId);
                if (user is not null)
                {
                    userModels.Add(user);
                }
            }
            var users = userModels.AsEnumerable();

            if (!string.IsNullOrEmpty(searchTerm))
            {
                users = users.Where(u => u.UserName.Contains(searchTerm));
            }
            return users
                .Join(students, u => u.UserId, s => s.UserId, (u, s) => new StudentShortDto()
                {
                    Email = u.Email,
                    Id = s.Id,
                    Name = u.UserName,
                    Group = s.Group.Code
                })
                .ToList();
        }

        public async Task<StudentDetailedDto?> GetDetailedStudent(Guid id)
        {
            var student = await context.Students
                .Include(s => s.Group)
                .Include(s => s.Grades)
                .ThenInclude(g => g.Work)
                .ThenInclude(w => w.Subject)
                .FirstOrDefaultAsync(s => s.Id == id);

            if (student is null)
            {
                return null;
            }

            var user = await userService.GetUserById(student.UserId);

            if (user is null)
            {
                throw new ArgumentException($"User with id {student.UserId} not found");
            }

            var gradesBySubject = student.Grades.GroupBy(g => g.Work.Subject.Name)
                .ToDictionary(
                    group => group.Key,
                    group => group.Average(g => g.Value) ?? 0
                );

            return new StudentDetailedDto()
            {
                Id = id,
                Name = user.UserName,
                Group = student.Group.Code,
                AvgGrade = student.Grades.Average(g => g.Value) ?? 0,
                AdditionalInfo = student.Activities,
                GradesBySubject = gradesBySubject,
            };
        }
    }
}
