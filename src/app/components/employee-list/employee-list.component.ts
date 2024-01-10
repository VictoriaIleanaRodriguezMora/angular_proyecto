import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  @Input({ required: true }) employees?: string[] = [];  // valor por defecto de array vacio
  @Output() selectEmployee = new EventEmitter
}
