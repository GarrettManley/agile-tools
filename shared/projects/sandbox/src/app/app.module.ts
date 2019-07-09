import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentsLibModule } from 'projects/components-lib/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ComponentsLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
