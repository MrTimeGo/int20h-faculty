import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsListComponent } from './students-list/students-list.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [StudentsListComponent],
  imports: [CommonModule, StudentsRoutingModule, SharedModule],
})
export class StudentsModule {}
