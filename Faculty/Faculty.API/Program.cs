using Faculty.API.Context;
using Microsoft.EntityFrameworkCore;
using Auth0.ManagementApi;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Faculty.API.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<FacultyContext>(options =>
            options.UseNpgsql(builder.Configuration.GetConnectionString("Context")));

builder.Services.AddSingleton(
    new ManagementApiClient(
        builder.Configuration["Auth0:ManagementApiToken"],
        new Uri($"{builder.Configuration["Auth0:Authority"]}api/v2")
));

builder.Services.AddScoped<UserService>();
builder.Services.AddScoped<UserSeeder>();
builder.Services.AddScoped<StudentService>();

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(options =>
{
    options.Authority = builder.Configuration["Auth0:Authority"];
    options.Audience = builder.Configuration["Auth0:Audience"];
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(x => x.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

using (var scope = app.Services.CreateScope())
{
    await scope.ServiceProvider.GetRequiredService<FacultyContext>().Database.MigrateAsync();

    var seeder = scope.ServiceProvider.GetRequiredService<UserSeeder>();
    await seeder.SeedUsers();
}

app.Run();
