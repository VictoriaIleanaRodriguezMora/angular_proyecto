import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCardComponent } from './components/shared/my-card/my-card.component';
import { PageWrapperComponent } from './components/layout/page-wrapper/page-wrapper.component';
import { ToolbarComponent } from './components/layout/toolbar/toolbar.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCardComponent,
    PageWrapperComponent,
    ToolbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
