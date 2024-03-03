import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WorkType } from '../../../core/models/workShortInfo';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  constructor(public dialogRef: DialogRef<string>) {}

  newTask = new FormGroup({
    name: new FormControl<string>(''),
    description: new FormControl<string>(''),
    type: new FormControl(WorkType.Homework),
    deadline: new FormControl<Date>(new Date()),
  });

  workType = WorkType;

  onRadioClicked(type: WorkType) {
    this.newTask.patchValue({ type });
  }

  submit() {}
}
