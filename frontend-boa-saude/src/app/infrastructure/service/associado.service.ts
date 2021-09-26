import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { AssociadoEntity } from '../../domain/entity/associado.entity';
import { IHttpCaller } from '../../domain/http/ihttp-caller';
import { IAssociadoService } from '../../domain/service/iassociado.service';

@Injectable({
  providedIn: 'root'
})
export class AssociadoService implements IAssociadoService {

	private urlassociado: string = environment.apiEndpoint;

	protected httpCaller: IHttpCaller

	constructor(httpCaller: IHttpCaller) {
		this.httpCaller = httpCaller;
		this.urlassociado += '/associado';
	}

	post(associado: AssociadoEntity): Observable<number> {
		return this.httpCaller.post(this.urlassociado, associado);
	}
	put(associado: AssociadoEntity): Observable<number> {
		return this.httpCaller.put(this.urlassociado, associado);
	}
	getById(prestadorId: number): Observable<AssociadoEntity> {
		return this.httpCaller.get(`${this.urlassociado}?${prestadorId}`);
	}
	getAll(): Observable<AssociadoEntity[]> {
		return this.httpCaller.get(this.urlassociado);
	}

}
