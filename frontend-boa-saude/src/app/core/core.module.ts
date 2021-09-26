import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IAssociadoUseCase } from '../domain/useCases/iassociado-use-case';
import { IPrestadorUseCase } from '../domain/useCases/iprestador-use-case';
import { AssociadoUseCase } from './useCases/associado-use-case';
import { PrestadorUseCase } from './useCases/prestador-use-case';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
		{ provide: IPrestadorUseCase, useClass: PrestadorUseCase },
		{ provide: IAssociadoUseCase, useClass: AssociadoUseCase }
  ]
})
export class CoreModule { }
