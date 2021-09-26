import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { IAuthGuard } from '../../domain/auth/iauth-guard';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements IAuthGuard, CanActivate {

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
		// TODO: retorno teste
		return true;
	}
}
