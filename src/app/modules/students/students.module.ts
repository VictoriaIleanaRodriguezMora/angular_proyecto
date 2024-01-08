import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from '../../components/students/students.component';
import { StudentsDirective } from '../../directives/students.directive';



@NgModule({
  declarations: [StudentsComponent, StudentsDirective],
  imports: [
    CommonModule
  ],
  exports: [StudentsComponent]
})
export class StudentsModule { }
