namespace Faculty.API.Dto
{
    public class SubjectShortDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public List<string> Groups { get; set; } = new List<string>();
    }
}
