import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from '../../components/employee-list/employee-list.component';



@NgModule({
  declarations: [EmployeeListComponent],
  imports: [
    CommonModule
  ],
  exports: [EmployeeListComponent]
})
export class EmployeeListModule { }
