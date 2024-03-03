using Bogus;
using Faculty.API.Entities;
using Faculty.API.Models;

namespace Faculty.API.Services
{
    public class UserSeeder(UserService service)
    {
        public async Task SeedUsers()
        {
            if (await service.Any())
            {
                return;
            }

            var userFaker = new Faker<CreateUserModel>()
                .RuleFor(u => u.Username, f => f.Name.FullName())
                .RuleFor(u => u.Email, f => f.Internet.Email())
                .RuleFor(u => u.Password, f => "TestTest0");


            // Teachers
            var teacherRole = "teacher";

            var teachers = userFaker.Generate(1);
            var teacherIds = new List<string>();
            foreach (var teacher in teachers)
            {
                teacherIds.Add(await service.CreateUser(teacher));
            }

            await service.AssignRoleToUsers(teacherRole, teacherIds);

            // Students
            var studentRole = "student";

            var groups = new Faker<Group>()
                .RuleFor(g => g.Code, f => f.Random.Replace("??-##"))
                .Generate(2);

            var students = userFaker
                .RuleFor(u => u.Group, f => f.PickRandom(groups.Select(g => g.Code)))
                .Generate(3);

            var studentIds = new List<string>();
            foreach (var student in students)
            {
                studentIds.Add(await service.CreateUser(student));
            }

            await service.AssignRoleToUsers(studentRole, studentIds);
        }
    }
}
