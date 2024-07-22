import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsPageComponent } from '../../components/students/students-page/students-page.component';



@NgModule({
  declarations: [StudentsPageComponent],
  imports: [CommonModule],
  exports: [StudentsPageComponent]
})
export class StudentsModule { }
