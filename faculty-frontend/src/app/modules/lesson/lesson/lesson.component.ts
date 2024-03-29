import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkService } from '../../../core/services/work.service';
import { NewTaskComponent } from '../new-task/new-task.component';
import { Dialog } from '@angular/cdk/dialog';
import { SubjectsService } from '../../../core/services/subjects.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.scss',
})
export class LessonComponent {
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private workService = inject(WorkService);
  private lessonService = inject(SubjectsService);

  lessonId = this.activatedRoute.snapshot.params['id'];
  works$ = this.workService.getWorksByLessonId(this.lessonId);

  lessonName$ = this.lessonService.getSubjectName(this.lessonId);

  constructor(public dialog: Dialog) {}

  redirectBack() {
    this.router.navigate(['lessons']);
  }
  openNewTaskDialog() {
    this.dialog.open(NewTaskComponent, {
      minWidth: '300px',
      width: '50vw',
      data: this.lessonId,
    });
  }
}
