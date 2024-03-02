﻿namespace Faculty.API.Entities
{
    public class Work
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public DateTime Deadline { get; set; }
        public WorkType Type { get; set; }
        public Guid LessonId { get; set; }
        public Lesson Lesson { get; set; } = new Lesson();
        public ICollection<Grade> Grades { get; set; } = new List<Grade>();
    }
}
