import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarModule } from './module/sidebar/sidebar.module';
import { ToolbarModule } from './module/toolbar/toolbar.module';
import { StudentsModule } from './module/students/students.module';
import { PageWrapperComponent } from './layout/page-wrapper/page-wrapper.component';
import { PageWrapperModule } from './module/page-wrapper/page-wrapper.module';
import { MyCardComponent } from './shared/components/my-card/my-card.component';
import { MyCardModule } from './module/my-card/my-card.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    ToolbarModule,
    StudentsModule,
    PageWrapperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
