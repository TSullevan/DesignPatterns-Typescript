import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesignPatternModule } from './design-pattern/design-pattern.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    DesignPatternModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
