export default {};

type LazyKeys<T extends object, U extends keyof T> = {
	[ K in keyof T ]: K extends U 
		? () => T[K]
		: T[K]
}

type TTest = {
	id: number,
	title: string,
	steps: TTestStep[]
}

type TTestStep = {
	id: number,
	title: string,
	answer: string
}

function getTest() : TTest{
	return {
		id: 1,
		title: 'Js',
		steps: [
			{ id: 1, title: 'Typeof null', answer: 'object' },
			{ id: 2, title: 'Typeof function', answer: 'object' }
			/* ... */
		]
	}
}

type lazyTest = LazyKeys<TTest, 'steps'>

type Store = {
	currentTest: lazyTest | null
}

function lazyKey<T extends object, U extends Extract<keyof T, string>>(obj: T, key: U) : LazyKeys<T, U>
{
	const res: any = {};

	for(let k in obj){
		res[k] = ( k === key ) ? () => obj[k] : obj[k];
	}

	return res;
}

const store: Store = {
	currentTest: null
}

const test1 = getTest();

store.currentTest = lazyKey(test1, 'steps');
/* console.log(store.currentTest);
console.log(store.currentTest.steps);
console.log(store.currentTest.steps()); */

//test file

const tobj = {
	id: 1,
	title: 'hello'
}

const a1 = lazyKey(tobj, 'id');
console.log(a1.title)
console.log(a1.id)
console.log(a1.id())

const a2 = lazyKey(tobj, 'title');
console.log(a2.title)
console.log(a2.id)
console.log(a2.title())



/*
	mobx < 5 -> getset
	vue < 3 getet

	vuex module state.test = test

	{
		id: 1,
		title: 'Js',
		steps: [
			{ id: 1, title: 'Typeof null', answer: 'object' },
			{ id: 2, title: 'Typeof function', answer: 'object' }
		]
	}

	{
		id: 1,
		title: 'Js',
		steps: () => ([
			{ id: 1, title: 'Typeof null', answer: 'object' },
			{ id: 2, title: 'Typeof function', answer: 'object' }
		])
	}
*/


// const TAss = (number) : number;
type Tass = number | string

const ass = (a : Tass) : Boolean => {
	if (typeof a === "string") {
		return true
	}
	return false
}

// const ass = (a : number) : number => {
// 	return a * 2
// }