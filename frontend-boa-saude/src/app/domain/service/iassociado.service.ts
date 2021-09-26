import { Observable } from 'rxjs';

import { AssociadoEntity } from '../entity/associado.entity';

export abstract class IAssociadoService {
	abstract post(associado: AssociadoEntity): Observable<number>;
	abstract put(associado: AssociadoEntity): Observable<number>;
	abstract getById(associadoId: number): Observable<AssociadoEntity>;
	abstract getAll(): Observable<AssociadoEntity[]>;
}