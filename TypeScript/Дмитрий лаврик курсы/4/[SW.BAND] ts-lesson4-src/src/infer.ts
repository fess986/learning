/* infer */

export default {}

type TUser = {
	id: number,
	login: string
}

function getUsers() : TUser[]{
	return [];
}

/* type a = typeof getUsers;
type b = ReturnType<a>
type c = Parameters<a> */

let users: ReturnType<typeof getUsers> | null = null;

users = getUsers();

type ArrEl<T> = T extends Array<infer R> ? R : never  // другими словами мы говорим TS-у проверить является ли Т - массивом, и если да, то используем тип этого массива

type a = ArrEl<number[]>  // number
type d = ArrEl<typeof users>; // users
type b = ArrEl<string[]>
type c = ArrEl<Array<string | number>>
type e = ArrEl<string>

/*
	T extends (...args: any) => infer R ? R : never
	T extends `${infer R1} ${infer R2}`
	T extends `${infer R1}.${infer R2}`

*/

/* /(\S+?)\s(.+)/ */

// type StrToTuple<T extends string, U extends string> = 
// 	T extends `${infer R1}.${infer R2}`   // в R1 попадает всё что до знака ".", а в R2 - всё что после
// 		? R1
// 		: [ T ]

// 		type q = StrToTuple<'hello.world.again.and.once.again', '.'>  
// 		// R1 - hello		
// 		// R2 - world.again.and.once.again


type StrToTuple<T extends string, U extends string> = 
	T extends `${infer R1}${U}${infer R2}`  
		? [ R1, ...StrToTuple<R2, U> ]  // находим до первого знака, и запускаем рекурсивно всё что осталось с новым параметром R2, в котором поместилось всё остальное
		: [ T ]  // тоже должны вернуть массив, как иначе рекурсия не будет работать, учитывая что берётся спред от неё

type q = StrToTuple<'hello.world.again.and.once.again', '.'>  // ["hello", "world", "again", "and", "once", "again"]

type TProduct = {
	id: number,
	title: string,
	category_id: number,
	Reviews_count: number,
	reviews_history_hz: number
}

type CamelKeys<T extends object> = 
{[K in keyof T as K extends `${infer R1}_${infer R2}` 
? `${Lowercase<R1>}${Capitalize<R2>}}`  // преобразование 1-го слова в Lowercase, а первую букву второго в верхний регистр
: K
] : T[K]}

type CamelProduct = CamelKeys<TProduct>

// CamelKeys<TProduct>
/* -> {
	id: number,
	title: string,
	categoryId: number,
	reviewsCount: number,
	reviewsHistoryHz: number
} */

console.log('ass')