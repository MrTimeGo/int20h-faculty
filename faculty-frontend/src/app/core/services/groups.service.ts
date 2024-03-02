import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GroupsService {
  http = inject(HttpClient);

  baseUrl = `${environment.apiUrl}/api/groups`;

  getAllGroups() {
    return this.http.get<string[]>(this.baseUrl);
  }
}
