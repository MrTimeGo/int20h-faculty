using Faculty.API.Entities;

namespace Faculty.API.Dto
{
    public class WorkShortInfo
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public WorkType Type { get; set; }
        public DateTime Deadline { get; set; }
    }
}
