import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IHttpInterceptor } from '../../domain/http/ihttp-interceptor';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptor implements IHttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next
      .handle(req)
      .pipe(catchError((error) => this.errorHandler(error)));
  }

  errorHandler(response: HttpErrorResponse): Observable<HttpEvent<any>> {
    let errs: any[] = [];

    switch (response.status) {
      case 400:
        console.log('Error', response.status);
        break;
      case 401:
        console.log('ERRO 401: Acesso não permitido.');
        break;
      case 404:
        console.log('ERRO 404: O recurso requisitado não existe.');
        break;
      case 406:
      case 409:
      case 500:
        console.log('Ocorreu um erro inesperado de servidor.');
        break;
      default:
        console.log('Ocorreu um erro desconhecido.');
        break;
    }

    return throwError(errs);
  }
}
