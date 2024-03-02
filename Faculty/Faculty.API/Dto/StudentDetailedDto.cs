namespace Faculty.API.Dto
{
    public class StudentDetailedDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Group { get; set; } = string.Empty;
        public double AvgGrade { get; set; }
        public string AdditionalInfo { get; set; } = string.Empty;
        public Dictionary<string, double> GradesBySubject { get; set; } = [];
    }
}
