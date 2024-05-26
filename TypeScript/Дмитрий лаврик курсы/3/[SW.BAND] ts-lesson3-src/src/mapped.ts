export default {}

// type keys = {
// 	a: 1,
// 	b: 2
// }

// type n = {
// 	[K in keyof keys ]: true  // использование ключей объекта keys в качестве ключей результирующего объекта - в итоге получим:
// 	// type n = {
//   //   a: true;
//   //   b: true;
// }
// }


// type a = 'a' | 'b' | 'c';

// type n = {
// 	[K in a ]: true  
// 	// type n = {
//     a: true;
//     b: true;
//     c: true;
// }
// }

type TConfig = {
	url: string,
	protocol: string,
	port: number,
	env: 'dev' | 'prod',
	logLevel: number
}

type ROnly<T extends object> = {
	readonly [K in keyof T]: T[K]  // ключи и их значения сохраняются, добавляется только модификатор readonly
}

type Opt<T extends object> = {
	[K in keyof T]?: T[K]
}

type ConfigOvveride = Opt<TConfig>;

let config: ROnly<TConfig> = {
	url: 'locahost',
	protocol: 'https',
	port: 3000,
	env: 'dev', 
	logLevel: 0
}

// type ConfigOvveride = {
// 	url?: string | undefined;
// 	protocol?: string | undefined;
// 	port?: number | undefined;
// 	env?: "dev" | "prod" | undefined;
// 	logLevel?: number | undefined;
// }

/* type Part<T extends object, U extends keyof T> = {
	[K in keyof T]: K extends U ? T[K] : never
} */

type Part<T extends object, U extends keyof T> = {
	[K in keyof T as K extends U ? K : never]: T[K]
}

type Res = Part<TConfig, 'env' | 'port'>

const res: Res = {
	env: 'prod',
	port: 1000
}

/* config.port++; */