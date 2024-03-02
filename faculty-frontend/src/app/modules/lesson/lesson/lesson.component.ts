import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.scss',
})
export class LessonComponent {
  private activatedRoute = inject(ActivatedRoute);

  lessonId = this.activatedRoute.snapshot.params['id'];

  constructor() {
    console.log(this.lessonId);
    
  }
}
