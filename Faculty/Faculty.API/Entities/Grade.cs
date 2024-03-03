namespace Faculty.API.Entities
{
    public class Grade
    {
        public Guid Id { get; set; }
        public Guid StudentId { get; set; }
        public Student Student { get; set; } = null!;
        public Guid WorkId { get; set; }
        public Work Work { get; set; } = new Work();
        public int? Value { get; set; }
    }
}
