type Cat = {
	voice: 'myau',
	age: number,
	weight: number,
	lifes: number
}

type Dog = {
	voice: 'gav' | 'myau',
	age: number,
	weight: number,
	agressive: boolean
}

type CommonPart22<T extends object, U extends object> = {
	[ K in keyof T as K extends keyof U ? K : never ]: 
		K extends keyof U 
			? T[K] | U[K]
			: never
}

type CommonPart2<T extends object, U extends object> = {
	[ K in (keyof T & keyof U) ]: T[K] | U[K]
}

type Catopes = CommonPart2<Cat, Dog>

type CommonPart1<T extends object, U extends object> = {
	[ 
		K in (keyof T & keyof U) as 
		T[K] extends U[K]
			? K
			: never
	]: T[K]
}

type Catopes1 = CommonPart1<Cat, Dog>

type CommonPart1SemiClever<T extends object, U extends object> = {
	[ 
		K in (keyof T & keyof U) as  // общие ключи
		T[K] extends U[K]  // значения входят
			? U[K] extends T[K] // обратное вхождение
				? K
				: never
			: never
	]: T[K]
}

type Catopes1SemiClever = CommonPart1SemiClever<Cat, Dog>
type Catopes1SemiCleverMirror = CommonPart1SemiClever<Dog, Cat>

type CommonPart1Clever<T extends object, U extends object> = {
	[ 
		K in (keyof T & keyof U) as 
		Extract<T[K], U[K]> extends never
			? never
			: K
	]: Extract<T[K], U[K]>
}

type Catopes1Clever = CommonPart1Clever<Cat, Dog>
type Catopes1CleverMirror = CommonPart1Clever<Dog, Cat>

type ColoredCat = Cat & {
	colors: {
		head: string,
		tail: string,
		mustache: string,
	}
}

type ColoredDog = Dog & {
	colors: {
		head: string,
		tail: string
	}
}

type CommonPart3Clever<T extends object, U extends object> = {
	[ 
		K in (keyof T & keyof U) as 
		Extract<T[K], U[K]> extends never
			? Extract<U[K], T[K]> extends never
				? never
				: K
			: K
	]: 
	T[K] extends object 
		? U[K] extends object 
			? CommonPart3Clever<T[K], U[K]>
			: never
		: U[K] extends object 
			? never
			: T[K]
}

type Catopes3 = CommonPart3Clever<ColoredCat, ColoredDog>
type Catopes31 = CommonPart3Clever<ColoredDog, ColoredCat>

const cp1: Catopes31 = {
	voice: 'myau',
	age: 1,
	weight: 3,
	colors: {
		head: '#fff',
		tail: '#000'
	}
}

/* 
const a: number | null = Math.random() > 0.5 ? 1 : 0;

if(a){
	a
}

a ? a : 1; */


/* type CommonPart<T, U> = {} */

//var 1
/* CommonPart<Cat, Dog> -> {
	age: number,
	weight: number,
} */

//var 2
/* CommonPart<Cat, Dog> -> {
	voice: 'myau' | 'gav',
	age: number,
	weight: number,
} */


/* type Cat1 = {
	voice: 'myau',
	age: number,
	weight: number,
	lifes: number,
	colors: {
		head: string,
		tail: string,
		mustache: string,
	}
}

type Dog1 = {
	voice: 'gav',
	age: number,
	weight: number,
	agressive: boolean,
	colors: {
		head: string,
		tail: string
	}
} */

//var 3, var1 + rec
/* CommonPart<Cat1, Dog1> -> {
	voice: 'myau' | 'gav',
	age: number,
	weight: number,
	colors: {
		head: string,
		tail: string
	}
}
 */
/* 
{
	home: {

	},
	catalog: {
		children: [
			list: {

			},
			item: {
				children: [
					{
						base: {

						},
						reviews: {

						}
					}
				]
			}
		]
	}
}

<Link to="catalog.item.base" */


/* type A<T extends object, K extends keyof T> = {

}

type C<T extends object, K = keyof T> = {

}

type B = A<Cat, 'lifes' | 'age'>

C<Cat> */