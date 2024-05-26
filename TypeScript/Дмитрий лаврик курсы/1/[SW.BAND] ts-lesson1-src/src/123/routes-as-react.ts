export default {};

type Component = () => string
 
type RouteRecord = {
	path?: string,
	redirect?: string,
	component?: Component,
	children?: RouteRecord[]
}

createRouter([
	{
		path: '/',
		component: () => 'home page'
	},
	{
		path: '/old',
		redirect: '/',
		component: () => 'home old'
	},
	{
		path: '/products',
		redirect: '/catalog',
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