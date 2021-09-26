import { Observable } from "rxjs";
import { PrestadorEntity } from "../entity/prestador.entity";

export abstract class IPrestadorUseCase {
	abstract cadastraPrestador(prestador: PrestadorEntity): Observable<number>;
}