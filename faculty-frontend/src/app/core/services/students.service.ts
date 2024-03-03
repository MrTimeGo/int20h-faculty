import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { StudentDetailed, StudentShort } from '../models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  http = inject(HttpClient);
  baseUrl = `${environment.apiUrl}/api/students`;

  getStudentsShort(searchTerm: string = '', groups: string[] = []) {
    const params = new URLSearchParams();

    if (searchTerm) {
      params.append('searchTerm', searchTerm);
    }

    if (groups.length) {
      groups.forEach((group) => {
        params.append('groups', group);
      });
    }

    const query = params.toString();
    return this.http.get<StudentShort[]>(
      query ? `${this.baseUrl}?${query}` : this.baseUrl
    );
  }

  getStudentDetailed(id: string) {
    return this.http.get<StudentDetailed>(`${this.baseUrl}/${id}`);
  }

  updateAdditionalInfo(id: string, info: string) {
    return this.http.put(`${this.baseUrl}/${id}`, { additionalInfo: info });
  }
}
