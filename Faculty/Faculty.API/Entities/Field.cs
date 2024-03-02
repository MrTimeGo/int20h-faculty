namespace Faculty.API.Entities
{
    public class Field
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public Guid TemplateId { get; set; }
        public Template Template { get; set; } = new Template();
    }
}
