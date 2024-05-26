import { RouteObject } from "react-router-dom";
import Home from "./views/Home";
import Catalog from "./views/Catalog";
import { GetRouteParams, RouteByDotKey, RouteRecord, RouteRecords, RoutesKeys } from "./types/router";
import CatalogItem from "./views/CatalogItem";

const routes = {	
	home: {
		path: '/',
		Component: Home
	},
	catalog: {
		path: '/catalog',
		Component: Catalog,
		children: {
			item: {
				path: '/catalog/:id',
				Component: CatalogItem
			}
		}
	}
} as const satisfies RouteRecords;

function routeToNative(route: RouteRecord){
	const { children, ...copy } = route;
	const res: RouteObject = copy;

	if(children){
		res.children = Object.values(children).map(routeToNative);
	}

	return res;
}

export type TRoutes = typeof routes;

export function route<T extends RoutesKeys<TRoutes>>(schema: T) : RouteByDotKey<TRoutes, T>{
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return schema.split('.').reduce((obj: any, key: string) => {
		if(!(key in obj.children)){
			throw new Error(`${schema} is wrong key for`);
		}

		return obj.children[key];
	}, { children: routes });
}

export function to<T extends RoutesKeys<TRoutes>>(schema: T, params: GetRouteParams<TRoutes, T>){
	let path: string = route(schema)['path'];
	
	Object.entries(params).forEach(([key, value]) => {
		path = path.replace(`:${key}`, value as string);
	});

	return path;
}

export const routesNative = Object.values(routes).map(routeToNative);

export default routes;