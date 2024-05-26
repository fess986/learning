type Cat = {
	voice: 'myau',
	age: number,
	weight: number,
	lifes: number
}

type Dog = {
	voice: 'gav',
	age: number,
	weight: number,
	agressive: boolean
}

type CommonPart<T extends object,U extends object> = {
	[K in keyof T as K extends keyof U ? K : never] : T[K]
}



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


// type Cat1 = {
// 	voice: 'myau',
// 	age: number,
// 	weight: number,
// 	lifes: number,
// 	colors: {
// 		head: string,
// 		tail: string,
// 		mustache: string,
// 	}
// }

// type Dog1 = {
// 	voice: 'gav',
// 	age: number,
// 	weight: number,
// 	agressive: boolean,
// 	colors: {
// 		head: string,
// 		tail: string
// 	}
// }

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