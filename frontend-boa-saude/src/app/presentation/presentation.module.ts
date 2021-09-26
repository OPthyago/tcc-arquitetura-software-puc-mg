import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IAssociadoController } from '../domain/controller/iassociado.controller';
import { IPrestadorController } from '../domain/controller/iprestador.controller';
import { AssociadoController } from './controller/associado.controller';
import { PrestadorController } from './controller/prestador.controller';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
		{ provide: IPrestadorController, useClass: PrestadorController },
		{ provide: IAssociadoController, useClass: AssociadoController }
  ]
})
export class PresentationModule { }
