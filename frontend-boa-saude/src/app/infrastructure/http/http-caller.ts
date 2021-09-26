import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IHttpCaller } from '../../domain/http/ihttp-caller';

@Injectable({
  providedIn: 'root'
})
export class HttpCaller implements IHttpCaller {

	constructor(
    protected httpClient: HttpClient
  ) { }

	get(url: string): Observable<any> {
		return this.httpClient.get(url);
	}
	post(url: string, data: any): Observable<any> {
		return this.httpClient.post(url, data);
	}
	put(url: string, data: any): Observable<any> {
		return this.httpClient.put(url, data);
	}
	patch(url: string, data: any): Observable<any> {
		return this.httpClient.patch(url, data);
	}

}
