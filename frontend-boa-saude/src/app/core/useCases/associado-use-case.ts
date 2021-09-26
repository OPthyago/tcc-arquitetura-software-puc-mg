import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IAssociadoService } from '../../domain/service/iassociado.service';
import { IAssociadoUseCase } from '../../domain/useCases/iassociado-use-case';
import { AssociadoEntity } from './../../domain/entity/associado.entity';



@Injectable({
  providedIn: 'root'
})
export class AssociadoUseCase implements IAssociadoUseCase {

	constructor(protected associadoService: IAssociadoService) {

	}

	cadastraAssociado(associado: AssociadoEntity): Observable<number> {
		throw new Error("Method not implemented.");
	}
}
