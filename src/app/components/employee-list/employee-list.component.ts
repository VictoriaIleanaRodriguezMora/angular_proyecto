import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  @Input() employees: string[] = [];  // valor por defecto de array vacio

}
