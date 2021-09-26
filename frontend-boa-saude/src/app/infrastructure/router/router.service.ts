import { Route as ngRoute, Routes } from '@angular/router';

import { IRouterService } from '../../domain/router/irouter.service';
import { AuthGuard } from '../auth/auth-guard';
import { FullComponent } from './../../main/layout/full/full.component';


export class RouteService implements IRouterService {
	getRouteObject(routes: Routes): ngRoute {
		return {
      path: '',
      component: FullComponent,
      children: routes,
      canActivate: [AuthGuard]
    };
	}
}
