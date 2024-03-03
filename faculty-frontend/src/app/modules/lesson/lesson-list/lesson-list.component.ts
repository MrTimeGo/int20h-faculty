import { Component, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SubjectShort } from '../../../core/models/subject';
import { Router } from '@angular/router';
import { Dialog } from '@angular/cdk/dialog';
import { NewLessonComponent } from '../new-lesson/new-lesson.component';
import { SubjectsService } from '../../../core/services/subjects.service';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrl: './lesson-list.component.scss',
})
export class LessonListComponent {
  private subjectService = inject(SubjectsService);
  constructor(private router: Router, public dialog: Dialog) {}
  lessons$: Observable<SubjectShort[]> = this.subjectService.getSubjects();

  redirectToLesson(id: string) {
    this.router.navigate([`lessons/${id}`]);
  }
  openNewLessonDialog() {
    this.dialog.open(NewLessonComponent, {
      minWidth: '300px',
      width: '50vw',
    });
  }
}
