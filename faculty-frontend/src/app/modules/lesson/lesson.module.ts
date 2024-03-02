import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonRoutingModule } from './lesson-routing.module';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    LessonListComponent
  ],
  imports: [
    CommonModule,
    LessonRoutingModule,
    SharedModule
  ]
})
export class LessonModule { }
