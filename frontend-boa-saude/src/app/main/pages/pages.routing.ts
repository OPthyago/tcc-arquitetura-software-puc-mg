import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RouteService } from '../../infrastructure/router/router.service';



const routeService: RouteService = new RouteService();
const routes: Routes = [
	routeService.getRouteObject([
		{
			path: 'home',
			loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
		},
		{
			path: 'associado/cadastrar',
			loadChildren: () => import('./associado/cadastro/associado.module').then(m => m.AssociadoModule)
		},
		{
			path: 'prestador/cadastrar',
			loadChildren: () => import('./prestador/cadastro/prestador.module').then(m => m.PrestadorModule)
		}
	])
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})
export class PagesRoutingModule { }
