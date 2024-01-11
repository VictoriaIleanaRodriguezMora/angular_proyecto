import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from '../../components/students/students.component'


@NgModule({
  declarations: [StudentsComponent, StudentsDirective],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [StudentsComponent]
})
export class StudentsModule { }
