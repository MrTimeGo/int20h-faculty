import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsListComponent } from './students-list/students-list.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentDetailedComponent } from './student-detailed/student-detailed.component';

@NgModule({
  declarations: [StudentsListComponent, StudentDetailedComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class StudentsModule {}
