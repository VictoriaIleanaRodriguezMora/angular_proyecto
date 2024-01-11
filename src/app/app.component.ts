import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_proyecto';
  empleadosEnVacaciones = ["Fulano", "Mengano", "Sultano"]
  empleadosNuevos = ["Ludmila", "Sol", "Ambar"]

  deleteEmployeeOnVacation(nameEmployeeToDelete: string) {
  this.empleadosEnVacaciones =  this.empleadosEnVacaciones.filter((nameEmployee) => {
      return nameEmployee != nameEmployeeToDelete
    })
  }

  selectEmployeeOnVacation() {
    console.log("Recibimos el evento de empleados en vacaciones");
  }

  addEmployee() {
    const nombre = prompt("Ingrese el nombre");
    if (nombre) {
      this.empleadosNuevos.push(nombre);
    }
  }
}
