import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonRoutingModule } from './lesson-routing.module';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { SharedModule } from '../../shared/shared.module';
import { LessonComponent } from './lesson/lesson.component';
import { RouterModule } from '@angular/router';
import { NewLessonComponent } from './new-lesson/new-lesson.component';
import { DialogModule } from '@angular/cdk/dialog';


@NgModule({
  declarations: [LessonListComponent, LessonComponent, NewLessonComponent],
  imports: [
    CommonModule,
    LessonRoutingModule,
    SharedModule,
    RouterModule,
    DialogModule,
  ],
})
export class LessonModule {}
