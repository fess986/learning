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
				path: '/catalog/:id',
				component: () => 'i catalog item',
				children: {
					reviews: {
						path: '/catalog/:id/reviews',
						component: () => 'i catalog item reviews list',
					},
					review: {
						path: '/catalog/:id/reviews/:rid',
						component: () => 'i catalog item reviews one',
					},
					rating: {
						path: '/catalog/:id/rating',
						component: () => 'i catalog item rating',
					}
				}
			}
		}
	}
} as const satisfies RouteRecords;

/* to('catalog.item.reviews', ) */

/* type at = RouteParams<typeof routes, 'catalog.item.reviews'> */

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

type GetRouteParams<T extends RouteRecords, K extends string> = InferRouteParams<RouteByDotKey<T, K>['path']>
type InferRouteParams<T extends string> = T extends `${infer _R1}/:${infer R2}` ? [ string | number, ...InferRouteParams<R2> ] : []

type a1 = GetRouteParams<TRoutes, 'catalog.item.rating'>
type a2 = GetRouteParams<TRoutes, 'catalog'>
type a3 = GetRouteParams<TRoutes, 'catalog.item.review'>

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
console.log(to('catalog.item.review', 1, 2));

function to<T extends RoutesKeys<TRoutes>>(schema: T, ...params: GetRouteParams<TRoutes, T>){
	let path: string = route(schema)['path'];
	let i = 0;
	
	path = path.replace(/:[aA-zZ0-9]+/g, () => {
		return params[i++].toString();
	});

	return path;
}

console.log(to('catalog.item.rating', 1));
console.log(to('catalog.item', 2));
console.log(to('home'));
/* 
<Link to={routes.catalog.children.item.children.reviews.path} />
<Link to={to('catalog.item.rating') />
<AppLink to="catalog.item.rating" /> */
