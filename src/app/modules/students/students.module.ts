import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from '../../components/students/students.component'
import { StudentsDirective } from '../../directives/students.directive';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======


>>>>>>> parent of 8bf4c8c (data binding)

@NgModule({
  declarations: [StudentsComponent, StudentsDirective],
  imports: [
    CommonModule
  ],
  exports: [StudentsComponent]
})
export class StudentsModule { }
