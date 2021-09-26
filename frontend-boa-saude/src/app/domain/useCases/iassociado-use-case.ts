import { Observable } from "rxjs";
import { AssociadoEntity } from "../entity/associado.entity";

export abstract class IAssociadoUseCase {
	abstract cadastraAssociado(associado: AssociadoEntity): Observable<number>;
}