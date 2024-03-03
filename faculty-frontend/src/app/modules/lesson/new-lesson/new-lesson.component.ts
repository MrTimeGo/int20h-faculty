import { DialogRef } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { GroupsService } from '../../../core/services/groups.service';

@Component({
  selector: 'app-new-lesson',
  templateUrl: './new-lesson.component.html',
  styleUrl: './new-lesson.component.scss',
})
export class NewLessonComponent {
  private groupService = inject(GroupsService);
  //groups$: Observable<string[]> = this.groupService.getAllGroups();

  groups$: Observable<string[]> = of(['KP-01', 'KP-02']);
  constructor(public dialogRef: DialogRef<string>) {}

  newLesson = new FormGroup({
    name: new FormControl<string>(''),
    groups: new FormControl<string[]>([]),
  });

  onCheckboxClicked(group: string) {
    let newGroups: string[];
    if (!this.newLesson.controls.groups.value?.includes(group)) {
      newGroups = [...this.newLesson.value.groups!, group];
    } else {
      newGroups =
        this.newLesson.controls.groups.value?.filter((v) => v !== group) ?? [];
    }

    this.newLesson.controls.groups.patchValue(newGroups);
  }
}
