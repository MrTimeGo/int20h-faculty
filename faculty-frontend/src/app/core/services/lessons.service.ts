import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LessonsService {
  http = inject(HttpClient);

  baseUrl = `${environment.apiUrl}/api/lessons`;

  getLessonName(id: string) {
    //return this.http.get<string>(`${this.baseUrl}/${id}`);
    return of("Name");
  }
}
