namespace Faculty.API.Dto
{
    public class StudentShortDto
    {
        public Guid Id { get; set; }

        public string Name { get; set; } = string.Empty;

        public string Group { get; set; } = string.Empty;

        public string Email { get; set; } = string.Empty;
    }
}
