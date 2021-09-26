import { Observable } from 'rxjs';

import { PrestadorEntity } from '../entity/prestador.entity';
import { EspecialidadeEntity } from './../entity/especialidade.entity';

export abstract class IPrestadorController {
	abstract cadastraPrestador(prestador: PrestadorEntity): Observable<number>;

  abstract getEspecialidades(): EspecialidadeEntity[];
}
