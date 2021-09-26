import { Observable } from "rxjs";
import { HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';

export abstract class IHttpInterceptor {
	abstract intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
	abstract errorHandler(response: HttpErrorResponse): Observable<HttpEvent<any>>;
}