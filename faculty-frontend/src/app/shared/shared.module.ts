import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from './components/tag/tag.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [TagComponent, CapitalizePipe, DropdownComponent],
  imports: [CommonModule, ReactiveFormsModule, NgbModule],
  exports: [TagComponent, CapitalizePipe, DropdownComponent],
})
export class SharedModule {}
