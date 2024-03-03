namespace Faculty.API.Dto
{
    public class SubjectShortWithoutId
    {
        public string Name { get; set; } = string.Empty;
        public List<string> Groups { get; set; } = new List<string>();
    }
}
