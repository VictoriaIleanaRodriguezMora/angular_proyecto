import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './modules/header/header.module';
import { SidebarModule } from './modules/sidebar/sidebar.module';
import { StudentsModule } from './modules/students/students.module';
import { EmployeeListModule } from './modules/employee-list/employee-list.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    SidebarModule,
    StudentsModule,
    EmployeeListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
