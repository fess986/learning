export default {}

type Cat = {
	voice: 'myau',
	age: number,
	weight: number,
	lifes: number
}

type A<T extends object, K extends keyof T> = {

}

type C<T extends object, K = keyof T> = {

}

type B = A<Cat, 'lifes' | 'age'>
type D = C<Cat>

type Human = {

}

type HomeCat = Cat & {
	owner: Human
}

const c1: HomeCat = {
	voice: 'myau',
	age: 1,
	weight: 3,
	lifes: 9,
	owner: {}
}

type abc = 'a' | 'b' | 'c';
type bcd = 'b' | 'c' | 'd';
type res = abc & bcd;

type d = abc extends bcd ? 1 : 0;
type e = Extract<abc, bcd>
type f = Extract<number, number>
type g = Extract<abc, number>

/* 
obj1 extends obj2
abc extends bcd */