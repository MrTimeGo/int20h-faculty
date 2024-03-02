using Bogus;
using Faculty.API.Models;

namespace Faculty.API.Services
{
    public class UserSeeder
    {
        public Task SeedUsers()
        {
            var userFaker = new Faker<UserModel>()
                .StrictMode(true)
                .RuleFor(u => u.Username, f => f.Name.FullName())
                .RuleFor(u => u.Email, f => f.Internet.Email())
                .RuleFor(u => u.Password, f => f.Internet.Password());


            // Teachers
            var teacherRole = "teacher";

            var teachers = userFaker.Generate(5);

            // Students
            var studentRole = "student";

            var students = userFaker.Generate(20);
        }
    }
}
