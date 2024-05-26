export default {};

type Map = Record<string, string | number>

const sample = {
	lat: 100,
	lgn: 100,
	msg: 'hello'
} satisfies Map;

sample.lat.toFixed();
sample.msg.substring(0, 1);
/* sample.msg.toFixed(); */


/*
	without as const || without satisfies

	type TRoutes = {
		as sample 50 route
	}

	const routes: TRoutes = {
		50-70% duplciate base on TRoutes
	}

	programmer is forewer sad
*/

/*
	simple object || 
	as const + satisfies

	const real = {

	} as const satisfies Expected;

	zero code duplicate

*/