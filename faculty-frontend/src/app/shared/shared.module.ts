import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from './components/tag/tag.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
  declarations: [TagComponent, CapitalizePipe],
  imports: [CommonModule],
  exports: [TagComponent, CapitalizePipe],
})
export class SharedModule {}
