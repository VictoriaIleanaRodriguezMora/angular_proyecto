import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  myFontSize = 23;
  myFontSize2 = 25 + 'px';
  hayError = true;
}
