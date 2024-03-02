namespace Faculty.API.Entities
{
    public class Group
    {
        public Guid Id { get; set; }
        public string Code { get; set; } = string.Empty;
        public int CourseNumber { get; set; }
        public ICollection<Lesson> Lessons { get; set; } = new List<Lesson>();
        public ICollection<Student> Students { get; set; } = new List<Student>();
    }
}
