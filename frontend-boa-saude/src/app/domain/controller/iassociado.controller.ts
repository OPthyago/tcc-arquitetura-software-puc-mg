import { Observable } from "rxjs";
import { AssociadoEntity } from "../entity/associado.entity";


export abstract class IAssociadoController {
	abstract cadastraAssociado(associado: AssociadoEntity): Observable<number>;
}