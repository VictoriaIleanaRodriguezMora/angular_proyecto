import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  myFontSize: Number = 23;
  myFontSize2: String = 25 + 'px';
  hayError: Boolean = true;
  size: String = 'smaller';
  studentsArr = ['Katniss', 'Triss', 'Alicia']
}
