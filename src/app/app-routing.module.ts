import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatternPageComponent } from './design-pattern/pages/pattern-page/pattern-page.component';

const routes: Routes = [
  {
    path: '',
    component: PatternPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
