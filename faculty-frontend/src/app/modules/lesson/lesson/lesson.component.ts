import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkService } from '../../../core/services/work.service';
import { LessonsService } from '../../../core/services/lessons.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.scss',
})
export class LessonComponent {
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private workService = inject(WorkService);
  private lessonService = inject(LessonsService);

  lessonId = this.activatedRoute.snapshot.params['id'];
  works$ = this.workService.getWorksByLessonId(this.lessonId);

  lessonName$ = this.lessonService.getLessonName(this.lessonId);

  redirectBack() {
    this.router.navigate(['lessons'])
  }
}
