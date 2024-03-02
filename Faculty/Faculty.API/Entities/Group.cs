namespace Faculty.API.Entities
{
    public class Group
    {
        public Guid Id { get; set; }
        public string Code { get; set; } = string.Empty;
        public ICollection<Subject> Subjects { get; set; } = new List<Subject>();
        public ICollection<Student> Students { get; set; } = new List<Student>();
    }
}
