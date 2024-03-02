namespace Faculty.API.Entities
{
    public class Student
    {
        public Guid Id { get; set; }
        public string UserId = string.Empty;
        public string Activities = string.Empty;
        public Guid GroupId { get; set; }
        public Group Group { get; set; } = new Group();
        public ICollection<Grade> Grades { get; set; }  = new List<Grade>();

    }
}
