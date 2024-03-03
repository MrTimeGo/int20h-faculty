import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import {
  WorkDetailedInfo,
  WorkShortInfo,
  WorkType,
} from '../models/workShortInfo';
import { of } from 'rxjs';
import { GradeShort } from '../models/grade';

@Injectable({
  providedIn: 'root',
})
export class WorkService {
  http = inject(HttpClient);

  baseUrl = `${environment.apiUrl}/api/works`;

  getWorksByLessonId(lessonId: string) {
    //return this.http.get<WorkShortInfo[]>(`${this.baseUrl}/${lessonId}`);
    return of([
      {
        id: 'fdfdfdff',
        name: 'lab ff',
        type: WorkType.Lab,
        deadline: new Date(),
      } as WorkShortInfo,
    ]);
  }

  getWorkShortById(workId: string) {
    return this.http.get<WorkDetailedInfo>(`${this.baseUrl}/${workId}`);
  }
}
