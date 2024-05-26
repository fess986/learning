type Component = () => string
 
type RouteRecordBase = {
	path: string
}

type RouteRecordComponent = RouteRecordBase & {
	component: () => string,
	children?: RouteRecord[],
	redirect?: never
}

type RouteRecordRedirect = RouteRecordBase & {
	redirect: string,
	component?: never,
	children?: never
}

type RouteRecord = RouteRecordComponent | RouteRecordRedirect;

createRouter([
	{
		path: '/',
		component: () => 'home page',
	},
	{
		path: '/old',
		redirect: '/',
		/* component: () => 'home old' */
	},
	{
		path: '/products',
		/* redirect: '/catalog', */
		component: () => 'home old',
		children: [
			{
				path: '/',
				component: () => '1'
			}
		]
	}
])

function createRouter(routes: RouteRecord[]){
	routes
}