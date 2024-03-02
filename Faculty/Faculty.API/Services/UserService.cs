using Auth0.ManagementApi;
using Auth0.ManagementApi.Models;
using Faculty.API.Models;

namespace Faculty.API.Services
{
    public class UserService(ManagementApiClient client, IConfiguration configuration)
    {
        public async Task<bool> Any()
        {
            var users = await client.Users.GetAllAsync(new GetUsersRequest
            {
                Connection = configuration["Auth0:DatabaseConnectionId"]
            });

            return users.Any();
        }

        public async Task<string> CreateUser(UserModel user, string role)
        {
            var createdUser = await client.Users.CreateAsync(new UserCreateRequest()
            {
                UserName = user.Username,
                Email = user.Email,
                Password = user.Password,
                Connection = configuration["Auth0:DatabaseConnectionId"],
                VerifyEmail = true,
            });

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
    }
}
