import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonRoutingModule } from './lesson-routing.module';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { SharedModule } from '../../shared/shared.module';
import { LessonComponent } from './lesson/lesson.component';
import { RouterModule } from '@angular/router';
import { NewLessonComponent } from './new-lesson/new-lesson.component';
import { DialogModule } from '@angular/cdk/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { NewTaskComponent } from './new-task/new-task.component';
import { GradesListComponent } from './grades-list/grades-list.component';


@NgModule({
  declarations: [LessonListComponent, LessonComponent, NewLessonComponent, NewTaskComponent, GradesListComponent],
  imports: [
    CommonModule,
    LessonRoutingModule,
    SharedModule,
    RouterModule,
    DialogModule,
    ReactiveFormsModule,
  ],
})
export class LessonModule {}
