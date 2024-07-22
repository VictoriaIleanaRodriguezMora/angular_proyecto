import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsPageComponent } from '../../components/students/students-page/students-page.component';
import { RoundedDirective } from '../../components/students/directive/rounded.directive';

@NgModule({
  declarations: [StudentsPageComponent, RoundedDirective],
  imports: [CommonModule],
  exports: [StudentsPageComponent],
})
export class StudentsModule { }
