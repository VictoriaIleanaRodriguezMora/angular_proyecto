import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './modules/header/header.module';
import { SidebarModule } from './modules/sidebar/sidebar.module';
import { StudentsModule } from './modules/students/students.module';
// import { StudentsDirective } from './directives/students.directive';


@NgModule({
  declarations: [
    AppComponent,
    // StudentsDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    SidebarModule,
    StudentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
