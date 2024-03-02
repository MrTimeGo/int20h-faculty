import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Lesson } from '../../../core/models/lesson';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrl: './lesson-list.component.scss',
})
export class LessonListComponent {
  /**
   *
   */
  constructor(private router: Router) {
    
    
  }
  lessons$: Observable<Lesson[]> = of([
    { id: 'gdfgd-dgdgdf-dgdg', name: 'ker', groups: ['kp-01', 'kp-02'] },
    { id: 'gdfgd-dgdgdf-erere', name: 'chi', groups: ['kp-01'] },
  ]);

  redirectToLesson(id: string){
    this.router.navigate([`lessons/${id}`]);
  }
}
