import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from './components/tag/tag.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TagComponent, CapitalizePipe, DropdownComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TagComponent, CapitalizePipe, DropdownComponent],
})
export class SharedModule {}
