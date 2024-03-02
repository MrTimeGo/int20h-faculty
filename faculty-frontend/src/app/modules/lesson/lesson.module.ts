import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonRoutingModule } from './lesson-routing.module';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { SharedModule } from '../../shared/shared.module';
import { LessonComponent } from './lesson/lesson.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LessonListComponent,
    LessonComponent
  ],
  imports: [
    CommonModule,
    LessonRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class LessonModule { }
