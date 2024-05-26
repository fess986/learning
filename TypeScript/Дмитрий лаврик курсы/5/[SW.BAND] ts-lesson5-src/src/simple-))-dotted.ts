import { FlattenKeys, GetByDotKey } from "./types";

export default {}

/*	
	app | 
	app.host | 
	app.port | 
	proxy | 
	proxy.target | 
	proxy.secure
*/
const config = {
	app: {
		host: 'localhost',
		port: 80,
		pagination: {
			default: 10,
			scrollLimit: Infinity
		}
	},
	proxy: {
		target: 'nz',
		secure: false
	},
	logLevel: 10
}

type TConfig = typeof config;

type t1 = GetByDotKey<TConfig, 'app.host'>
type t2 = GetByDotKey<TConfig, 'logLevel'>
type t3 = GetByDotKey<TConfig, 'logLeve3l'>
type t4 = GetByDotKey<TConfig, 'app.pagination.default'>

function conf<T extends FlattenKeys<TConfig>>(schema: T) : GetByDotKey<TConfig, T>{
	return schema.split('.').reduce((obj: any, key: string) => {
		if(!(key in obj)){
			throw new Error(`${schema} is wrong key for`);
		}

		return obj[key];
	}, config);
}

const r1 = conf('app.pagination');
const r2 = conf('app.pagination.scrollLimit');

console.log(r1);
console.log(r2);


// GetByDotKey<TConfig, 'app.host'>

/* `app.host` | `app`
`app.port` | 
`app.pagination.default>` | 
`app.pagination.scrollLimit> */










/* 'app' extends string ? K : 'no' | 
'proxy' extends string ? K : 'no' */

/* function isObject(obj: unknown){
	return typeof obj === 'object';
}

isObject(1); */