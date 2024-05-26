export default {};

/* type StrToTuple<T extends string, U extends string> = 
	T extends `${infer R1}${U}${infer R2}`
		? [ R1, ...StrToTuple<R2, U> ]
		: [ T ]

type q = StrToTuple<'hello.world.again.and.once.again', '.'> */

type TProduct = {
	id: number,
	title: string,
	category_id: number,
	reviews_count: number,
	reviews_history_hz: number,
	stats_markers: {
		count_all: number
	}
}

type CamelCase<T> = 
	T extends `${infer R1}_${infer R2}`
		? `${R1}${CamelCase<Capitalize<R2>>}`
		: T

type CamelKeys<T extends object> = {
	[ K in keyof T as CamelCase<K> ]: 
		T[K] extends object 
			? CamelKeys<T[K]>
			: T[K]
}

type CapsProduct = CamelKeys<TProduct>

const pr1: TProduct = {
	id: 1,
	title: 'a',
	category_id: 1,
	reviews_count: 2,
	reviews_history_hz: 34,
	stats_markers: {
		count_all: 1
	}
}

function camelKeys<T extends object>(obj: T) : CamelKeys<T>{
	const res: any = {};

	for(let key in obj){
		const value = obj[key];
		res[camelize(key)] = ( value && typeof value === 'object' ) ? camelKeys(value) : value;
	}

	return res;
}

console.log(camelKeys(pr1));

function camelize(str: string) {
	return str.replace(/_+/g, '').replace(/_\w/g, (l, i) => i === 0 ? l : l.toUpperCase()).replace(/_/g, '');
}

type A1 = CamelCase<'first_variable_name'>
const a1 = camelize('first_variable_name');
console.log(a1);

type A2 = CamelCase<'First_variable_name'>
const a2 = camelize('First_variable_name');
console.log(a2);

type A3 = CamelCase<'first__variable_name'>
const a3 = camelize('first__variable_name');
console.log(a3);

/* type CamelCase2<T> = 
	T extends `${infer R1}_${infer R2}${infer R3}`
		? `${R1}${Uppercase<R2>}${CamelCase2<R3>}`
		: T

type a = CamelCase2<'title'>
type b = CamelCase2<'category_id'>
type c = CamelCase2<'reviews_history_hz'> */

/* tags title h1 {{age}} other {{count}} qqq

str.replace(/{{(.+?)}}/g, function(m){

}); */