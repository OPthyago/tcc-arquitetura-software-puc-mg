import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PrestadorEntity } from '../../domain/entity/prestador.entity';
import { IPrestadorService } from '../../domain/service/iprestador.service';
import { IPrestadorUseCase } from '../../domain/useCases/iprestador-use-case';


@Injectable({
  providedIn: 'root'
})
export class PrestadorUseCase implements IPrestadorUseCase {

	constructor(protected prestadorService: IPrestadorService) {

	}

	cadastraPrestador(prestador: PrestadorEntity): Observable<number> {
		return this.prestadorService.post(prestador);
	}
}
