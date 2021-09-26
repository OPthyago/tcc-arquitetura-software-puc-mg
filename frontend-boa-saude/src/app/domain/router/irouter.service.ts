import { Routes } from "@angular/router";

export interface IRouterService {
	getRouteObject(routes: Routes): any;
}