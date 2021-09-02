import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Filter1Component } from './filter1/filter1.component';
import { Filter2Component } from './filter2/filter2.component';
import { ButtonsSectionComponent } from './buttons-section/buttons-section.component';
import { FormsModule, NgForm } from '@angular/forms';
import { GlobalServices } from './global.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    Filter1Component,
    Filter2Component,
    ButtonsSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [GlobalServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
