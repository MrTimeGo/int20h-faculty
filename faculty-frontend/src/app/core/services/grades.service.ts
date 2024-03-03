import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { GradeShort } from '../models/grade';

@Injectable({
  providedIn: 'root',
})
export class GradesService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/api/grades`;

  getGradesForWorkByStudentIds(workId: string, studentIds: string[]) {
    const params = new URLSearchParams();

    studentIds.forEach((id) => {
      params.append('studentIds', id);
    });

    const url = `${this.baseUrl}/work/${workId}`;
    return this.http.get<GradeShort[]>(
      params.toString() ? `${url}?${params.toString()}` : url
    );
  }

  setGrade(workId: string, studentId: string, value: number) {
    return this.http.post(
      `${this.baseUrl}/work/${workId}/student/${studentId}`,
      { value }
    );
  }
}
