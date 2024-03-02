import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Lesson } from '../../../core/models/lesson';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrl: './lesson-list.component.scss',
})
export class LessonListComponent {
  lessons$: Observable<Lesson[]> = of([
    { name: 'ker', groups: ['kp-01', 'kp-02'] },
    { name: 'chi', groups: ['kp-01'] },
  ]);


  
}
