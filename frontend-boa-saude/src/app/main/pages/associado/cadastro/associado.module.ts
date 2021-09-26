import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AssociadoComponent } from './associado.component';
import { AssociadoRoutingModule } from './associado.routing.module';

@NgModule({
  imports: [
    CommonModule,
    AssociadoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [AssociadoComponent],
})
export class AssociadoModule {}
