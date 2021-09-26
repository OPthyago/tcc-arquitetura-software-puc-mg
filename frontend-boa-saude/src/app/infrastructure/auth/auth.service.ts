import { Injectable } from '@angular/core';

import { IAuthService } from '../../domain/auth/iauth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements IAuthService {
	isAuthenticated(): boolean {
		// TODO: retorno de teste
		return true;
	}
}
