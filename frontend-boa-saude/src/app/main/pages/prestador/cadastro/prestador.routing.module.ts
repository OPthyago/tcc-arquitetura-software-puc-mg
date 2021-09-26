import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrestadorComponent } from './prestador.component';


const routes: Routes = [
  {
    path: '',
    component: PrestadorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestadorRoutingModule { }
