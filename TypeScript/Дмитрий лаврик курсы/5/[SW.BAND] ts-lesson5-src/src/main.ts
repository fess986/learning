export default {};

type Component = () => string
 
type RouteRecordBase = {
	path: string
}

type RouteRecordComponent = RouteRecordBase & {
	component: () => string,
	children?: RouteRecords,
	redirect?: never
}

type RouteRecordRedirect = RouteRecordBase & {
	redirect: string,
	component?: never,
	children?: never
}

type RouteRecord = RouteRecordComponent | RouteRecordRedirect;
type RouteRecords = Record<string, RouteRecord>

const routes = {
	home: {
		path: '/',
		component: () => 'i home'	
	},
	old: {
		path: '/old',
		redirect: 'home',
	},
	catalog: {
		path: '/catalog',
		component: () => 'i catalog',
		children: {
			item: {
				path: '/catalog/item',
				component: () => 'i catalog item',
				children: {
					reviews: {
						path: '/catalog/item/reviews',
						component: () => 'i catalog item reviews',
					},
					rating: {
						path: '/catalog/item/rating',
						component: () => 'i catalog item rating',
					}
				}
			}
		}
	}
} as const;

/* type StrObj = Record<string, unknown> */

type RoutesKeys<T extends RouteRecords, K = keyof T> = 
	K extends string 
		? T[K] extends { children: RouteRecords }
			? `${K}.${RoutesKeys<T[K]['children']>}` | K
			: K
		: never

type RouteByDotKey<T extends RouteRecords, K extends string> = 
	K extends `${infer R1}.${infer R2}` 
		? T[R1] extends { children: RouteRecords }
			? RouteByDotKey<T[R1]['children'], R2>
			: never
		: K extends keyof T
			? T[K]
			: never

type a = RoutesKeys<typeof routes>
type r1 = RouteByDotKey<typeof routes, 'home'>
type r2 = RouteByDotKey<typeof routes, 'catalog.item'>
type r3 = RouteByDotKey<typeof routes, 'catalog.item.reviews'>

console.log(routes.catalog.children.item.children.reviews.path);

type TRoutes = typeof routes;

function route<T extends RoutesKeys<TRoutes>>(schema: T) : RouteByDotKey<TRoutes, T>{
	return schema.split('.').reduce((obj: any, key: string) => {
		if(!(key in obj.children)){
			throw new Error(`${schema} is wrong key for`);
		}

		return obj.children[key];
	}, { children: routes });
}

console.log(route('catalog.item.rating'));
console.log(route('catalog.item'));
console.log(route('home'));

function to<T extends RoutesKeys<TRoutes>>(schema: T){
	return route(schema)['path'];
}

console.log(to('catalog.item.rating'));
console.log(to('catalog.item'));
console.log(to('home'));
/* 
<Link to={routes.catalog.children.item.children.reviews.path} />
<Link to={to('catalog.item.rating') />
<AppLink to="catalog.item.rating" /> */