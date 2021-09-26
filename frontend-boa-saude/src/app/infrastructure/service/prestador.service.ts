import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { PrestadorEntity } from '../../domain/entity/prestador.entity';
import { IHttpCaller } from '../../domain/http/ihttp-caller';
import { IPrestadorService } from '../../domain/service/iprestador.service';

@Injectable({
  providedIn: 'root'
})
export class PrestadorService implements IPrestadorService {

	private urlPrestador: string = environment.apiEndpoint;

	protected httpCaller: IHttpCaller

	constructor(httpCaller: IHttpCaller) {
		this.httpCaller = httpCaller;
		this.urlPrestador += 'prestador';
	}

	post(prestador: PrestadorEntity): Observable<number> {
		return this.httpCaller.post(this.urlPrestador, prestador);
	}
	put(prestador: PrestadorEntity): Observable<number> {
		return this.httpCaller.put(this.urlPrestador, prestador);
	}
	getById(prestadorId: number): Observable<PrestadorEntity> {
		return this.httpCaller.get(`${this.urlPrestador}?${prestadorId}`);
	}
	getAll(): Observable<PrestadorEntity[]> {
		return this.httpCaller.get(this.urlPrestador);
	}

}
