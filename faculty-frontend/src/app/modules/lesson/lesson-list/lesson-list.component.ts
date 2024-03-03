import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Lesson } from '../../../core/models/lesson';
import { Router } from '@angular/router';
import { Dialog } from '@angular/cdk/dialog';
import { NewLessonComponent } from '../new-lesson/new-lesson.component';


@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrl: './lesson-list.component.scss',
})
export class LessonListComponent {
  /**
   *
   */
  constructor(private router: Router,public dialog: Dialog) {}
  lessons$: Observable<Lesson[]> = of([
    { id: 'gdfgd-dgdgdf-dgdg', name: 'ker', groups: ['kp-01', 'kp-02'] },
    { id: 'gdfgd-dgdgdf-erere', name: 'chi', groups: ['kp-01'] },
  ]);

  redirectToLesson(id: string) {
    this.router.navigate([`lessons/${id}`]);
  }
  openNewLessonDialog() {
    this.dialog.open(NewLessonComponent, {
      minWidth: '300px',
      width: '50vw'
    });
  }
}
