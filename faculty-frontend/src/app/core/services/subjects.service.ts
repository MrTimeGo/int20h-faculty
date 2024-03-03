import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { SubjectShort, SubjectShortWithoutId } from '../models/subject';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubjectsService {
  http = inject(HttpClient);

  baseUrl = `${environment.apiUrl}/api/subjects`;

  getSubjectName(id: string) {
    return this.http
      .get<{ name: string }>(`${this.baseUrl}/${id}`)
      .pipe(map(({ name }) => name));
  }

  getSubjects() {
    return this.http.get<SubjectShort[]>(`${this.baseUrl}`);
  }

  addSubject(subj: SubjectShortWithoutId) {
    return this.http.post(`${this.baseUrl}`, subj);
  }
}
