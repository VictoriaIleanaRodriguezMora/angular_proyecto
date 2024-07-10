import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from '../../layout/toolbar/toolbar.component';



@NgModule({
  declarations: [ToolbarComponent],
  imports: [CommonModule],
  exports: [ToolbarComponent]
})
export class ToolbarModule { }
