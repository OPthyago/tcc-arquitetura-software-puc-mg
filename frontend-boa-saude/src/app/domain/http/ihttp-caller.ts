import { Observable } from "rxjs";

export abstract class IHttpCaller {
	abstract get(url: string): Observable<any>;
	abstract post(url: string, data: any): Observable<any>;
	abstract put(url: string, data: any): Observable<any>;
	abstract patch(url: string, data: any): Observable<any>;
}