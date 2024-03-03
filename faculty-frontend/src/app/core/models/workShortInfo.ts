export interface WorkShortInfo {
  id: string;
  name: string;
  deadline: Date;
  type: WorkType;
}

export enum WorkType {
  Homework = 'Homework',
  Lab = 'Lab',
  Test = 'Test',
  Credit = 'Credit',
  Exam = 'Exam',
}

export interface NewWork {
  name: string;
  deadline: Date;
  type: WorkType;
  description: string;
}
