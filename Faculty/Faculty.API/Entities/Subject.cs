namespace Faculty.API.Entities
{
    public class Subject
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string TeacherId { get; set; } = string.Empty;
        public ICollection<Group> Groups { get; set; } = new List<Group>();
        public ICollection<Work> Works { get; set; } = new List<Work>();
    }
}
