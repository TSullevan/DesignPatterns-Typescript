import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignPatternRoutingModule } from './design-pattern-routing.module';
import { PatternPageComponent } from './pages/pattern-page/pattern-page.component';
import { Component1Component } from './components/component1/component1.component';
import { Component2Component } from './components/component2/component2.component';


@NgModule({
  declarations: [
    PatternPageComponent,
    Component1Component,
    Component2Component
  ],
  imports: [
    CommonModule,
    DesignPatternRoutingModule
  ]
})
export class DesignPatternModule { }
