import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { LessonComponent } from './lesson/lesson.component';

const routes: Routes = [
  { path: '', component: LessonListComponent },
  { path: ':id', component: LessonComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonRoutingModule { }
