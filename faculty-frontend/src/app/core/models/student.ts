export interface StudentShort {
  id: string;
  name: string;
  group: string;
  email: string;
}

export interface StudentDetailed {
  id: string;
  name: string;
  group: string;
  avgGrade: number;
  additionalInfo: string;
  gradesBySubject: Map<string, number>;
}
