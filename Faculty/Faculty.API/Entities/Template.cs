namespace Faculty.API.Entities
{
    public class Template
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;

        public ICollection<Field> Fields { get; set; } = new List<Field>();
    }
}
