import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IAssociadoController } from '../../domain/controller/iassociado.controller';
import { AssociadoEntity } from '../../domain/entity/associado.entity';
import { IAssociadoUseCase } from '../../domain/useCases/iassociado-use-case';


@Injectable({
  providedIn: 'root'
})
export class AssociadoController implements IAssociadoController {

	constructor (private associadoUseCase: IAssociadoUseCase) {
	}

	cadastraAssociado(associado: AssociadoEntity): Observable<number> {
		throw new Error("Method not implemented.");
	}

}
