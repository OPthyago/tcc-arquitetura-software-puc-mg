import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PrestadorComponent } from './prestador.component';
import { PrestadorRoutingModule } from './prestador.routing.module';



@NgModule({
  imports: [
    CommonModule,
    PrestadorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [PrestadorComponent],
})
export class PrestadorModule {}
