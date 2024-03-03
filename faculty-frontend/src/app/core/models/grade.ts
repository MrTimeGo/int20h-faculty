export interface Grade {
  studentUsername: string;
  answer: string;
  group: string;
}

export interface GradeShort {
  studentId: string;
  value: number | null;
}
