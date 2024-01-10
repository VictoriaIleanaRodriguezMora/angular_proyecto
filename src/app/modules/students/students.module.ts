import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from '../../components/students/students.component';
import { StudentsDirective } from '../../directives/students.directive';
import { FormsModule } from "@angular/forms"


@NgModule({
  declarations: [StudentsComponent, StudentsDirective],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [StudentsComponent]
})
export class StudentsModule { }
