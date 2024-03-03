import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentDetailedComponent } from './student-detailed/student-detailed.component';

const routes: Routes = [
  { path: '', component: StudentsListComponent },
  { path: ':id', component: StudentDetailedComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsRoutingModule {}
