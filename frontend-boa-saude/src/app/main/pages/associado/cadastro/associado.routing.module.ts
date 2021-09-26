import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssociadoComponent } from './associado.component';


const routes: Routes = [
  {
    path: '',
    component: AssociadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssociadoRoutingModule { }