import { Observable } from 'rxjs';

import { PrestadorEntity } from '../entity/prestador.entity';

export abstract class IPrestadorService {
	abstract post(prestador: PrestadorEntity): Observable<number>;
	abstract put(prestador: PrestadorEntity): Observable<number>;
	abstract getById(prestadorId: number): Observable<PrestadorEntity>;
	abstract getAll(): Observable<PrestadorEntity[]>;
}