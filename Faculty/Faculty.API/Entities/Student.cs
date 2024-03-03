namespace Faculty.API.Entities
{
    public class Student
    {
        public Guid Id { get; set; }
        public string UserId { get; set; }  = string.Empty;
        public string Activities { get; set; } = string.Empty;
        public Guid GroupId { get; set; }
        public Group Group { get; set; } = null!;
        public ICollection<Grade> Grades { get; set; }  = new List<Grade>();

    }
}
