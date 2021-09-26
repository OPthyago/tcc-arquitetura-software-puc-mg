import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { IHttpCaller } from '../domain/http/ihttp-caller';
import { IAssociadoService } from '../domain/service/iassociado.service';
import { IPrestadorService } from '../domain/service/iprestador.service';
import { HttpCaller } from './http/http-caller';
import { HttpInterceptor } from './http/http-interceptor';
import { AssociadoService } from './service/associado.service';
import { PrestadorService } from './service/prestador.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
		{ provide: IPrestadorService, useClass: PrestadorService },
		{ provide: IAssociadoService, useClass: AssociadoService },
		{ provide: IHttpCaller, useClass: HttpCaller },
		{
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptor,
      multi: true
    }
  ]
})
export class InfraModule { }
