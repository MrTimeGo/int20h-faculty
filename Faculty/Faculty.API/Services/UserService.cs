using Auth0.ManagementApi;
using Auth0.ManagementApi.Models;
using Faculty.API.Context;
using Faculty.API.Entities;
using Faculty.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Faculty.API.Services
{
    public class UserService(ManagementApiClient client, FacultyContext context, ILogger<UserService> logger)
    {
        public async Task<bool> Any()
        {
            var users = await client.Users.GetAllAsync(new GetUsersRequest
            {
                SearchEngine = "v3",
            });

            return users.Any();
        }

        public async Task<string> CreateUser(CreateUserModel user)
        {
            var createdUser = await client.Users.CreateAsync(new UserCreateRequest()
            {
                UserName = user.Username.Replace(" ", ""),
                Email = user.Email,
                Password = user.Password,
                Connection = "Username-Password-Authentication",
                VerifyEmail = true,
            });

            if (!string.IsNullOrEmpty(user.Group))
            {
                if (!(await context.Groups.Where(g => g.Code == user.Group).AnyAsync()))
                {
                    context.Groups.Add(new Group
                    {
                        Code = user.Group
                    });

                    await context.SaveChangesAsync();
                }

                var group = await context.Groups.FirstAsync(g => g.Code == user.Group);

                context.Students.Add(new Student()
                {
                    UserId = createdUser.UserId,
                    GroupId = group.Id,
                });

                await context.SaveChangesAsync();
            }

            return createdUser.UserId;
        }

        public async Task AssignRoleToUsers(string role, List<string> userIds)
        {
            var roles = await client.Roles.GetAllAsync(new GetRolesRequest()
            {
                NameFilter = role,
            });

            if (!roles.Any())
            {
                throw new ArgumentException("Role not found");
            }

            var requestedRole = roles.First();

            await client.Roles.AssignUsersAsync(requestedRole.Id, new AssignUsersRequest()
            {
                Users = userIds.ToArray(),
            });
        }

        public async Task<UserModel?> GetUserById(string id)
        {
            try
            {
                var user = await client.Users.GetAsync(id);

                return new UserModel
                {
                    UserId = user.UserId,
                    Email = user.Email,
                    UserName = user.UserName,
                };
            } 
            catch (Exception ex)
            {
                logger.LogError(ex, "Error occured");
                return null;
            }
        }
    }
}
