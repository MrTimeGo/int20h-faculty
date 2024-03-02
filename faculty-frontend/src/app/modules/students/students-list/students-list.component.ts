import { Component, inject } from '@angular/core';
import { GroupsService } from '../../../core/services/groups.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.scss',
})
export class StudentsListComponent {
  groupService = inject(GroupsService);

  groups$ = this.groupService.getAllGroups();
}
