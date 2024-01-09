import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  status: String = 'APPROVED'
  loading: Boolean = true;
  myFontSize: Number = 23;
  myFontSize2: String = 25 + 'px';
  hayError: Boolean = true;
  size: String = 'smaller';
  studentsArr = ['Katniss', 'Triss', 'Alicia'];
  studentsArr2 = ['Tiziano', 'Tiziana', 'Tissi'];
  studentsArr3 = ['A', 'B', 'C'];
  studentsArr4 = ['W', 'A', 'S'];



  constructor() {
    setTimeout( () => {
      this.loading = false
    }, 3000 )
  }

}
