import { WorkType } from "./workShortInfo";

export interface WorkWithGrades{
    name: string,
    type: WorkType,
    description: string,
    grades
}