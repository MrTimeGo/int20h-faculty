import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { NewWork, WorkShortInfo } from '../models/workShortInfo';

@Injectable({
  providedIn: 'root',
})
export class WorkService {
  http = inject(HttpClient);

  baseUrl = `${environment.apiUrl}/api/works`;

  getWorksByLessonId(lessonId: string) {
    return this.http.get<WorkShortInfo[]>(`${this.baseUrl}/${lessonId}`);
  }

  addWork(work: NewWork) {
    return this.http.post(`${this.baseUrl}`, work);
  }
}
