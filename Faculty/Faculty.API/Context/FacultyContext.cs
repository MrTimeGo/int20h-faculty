using Faculty.API.Entities;
using Microsoft.EntityFrameworkCore;

namespace Faculty.API.Context
{
    public class FacultyContext: DbContext
    {
        public DbSet<Student> Students { get; set; }
        public DbSet<Grade> Grades { get; set; }
        public DbSet<Group> Groups { get; set; }
        public DbSet<Lesson> Lessons { get; set; }
        public DbSet<Work> Works { get; set; }
        public DbSet<Template> Templates { get; set; }
        public DbSet<Field> Fields { get; set; }
        public FacultyContext(DbContextOptions<FacultyContext> options): base(options) { }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Student>()
                .HasOne(s => s.Group)
                .WithMany(g => g.Students)
                .HasForeignKey(g => g.GroupId);

            modelBuilder.Entity<Grade>()
                .HasOne(g => g.Student)
                .WithMany(s => s.Grades)
                .HasForeignKey(g => g.StudentId);

            modelBuilder.Entity<Grade>()
                .HasOne(g => g.Work)
                .WithMany(w => w.Grades)
                .HasForeignKey(g => g.WorkId);

            modelBuilder.Entity<Work>()
                .HasOne(w => w.Lesson)
                .WithMany(l => l.Works)
                .HasForeignKey(w => w.LessonId);

            modelBuilder.Entity<Lesson>()
                .HasMany(l => l.Groups)
                .WithMany(g => g.Lessons);

            modelBuilder.Entity<Field>()
                .HasOne(f => f.Template)
                .WithMany(t => t.Fields)
                .HasForeignKey(f => f.TemplateId);
        }
    }
}
