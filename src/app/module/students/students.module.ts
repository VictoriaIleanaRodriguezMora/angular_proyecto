import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from '../../pages/students/students.component';
import { MyCardModule } from '../my-card/my-card.module';



@NgModule({
  declarations: [StudentsComponent],
  imports: [CommonModule, MyCardModule],
  exports: [StudentsComponent]
})
export class StudentsModule { }
