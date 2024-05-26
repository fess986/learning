import { RouteObject } from 'react-router-dom' 

export type RouteRecords = Record<string, RouteRecord>
export type RouteRecord = Omit<RouteObject, 'path' | 'children'> & {
	path: string,
	children?: RouteRecords
};

export type RoutesKeys<T extends RouteRecords, K = keyof T> = 
	K extends string 
		? T[K] extends { children: RouteRecords }
			? `${K}.${RoutesKeys<T[K]['children']>}` | K
			: K
		: never

export type RouteByDotKey<T extends RouteRecords, K extends string> = 
	K extends `${infer R1}.${infer R2}` 
		? T[R1] extends { children: RouteRecords }
			? RouteByDotKey<T[R1]['children'], R2>
			: never
		: K extends keyof T
			? T[K]
			: never

export type RouterPathChunk<T extends string> = T extends `${infer R1}/${infer R2}`
	? R1 | RouterPathChunk<R2>
	: T;

export type RouteChunksToNames<T extends string> = 
	T extends `:${infer R1}-:${infer R2}` 
		? R1 | RouteChunksToNames<`:${R2}`>
		: 	T extends `:${infer R1}`
			? R1
			: never

export type GetRouteParams<T extends RouteRecords, U extends string> = {
	[K in RouteChunksToNames<RouterPathChunk<RouteByDotKey<T, U>['path']>>]: number | string
}