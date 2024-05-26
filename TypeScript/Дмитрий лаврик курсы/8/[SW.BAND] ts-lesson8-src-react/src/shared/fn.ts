export default {}

/* class A{
	sum(a: number, b: number){

	}
	
	sum(a: string, b: string){
		
	}
} */

type Arr = Array<number>
type ReadonlyArr = Readonly<Arr>

const a : ReadonlyArr = [1,2,3]
a.push(4)  // ошибка, так как массив стал readonly

type T0 = NonNullable<string | number | undefined>;
     
// type T0 = string | number
// type T1 = NonNullable<string[] | null | undefined>;
     
// type T1 = string[]

const sum = (a : number, b : number) : number => {
	return a + b
}
type Tsum = ReturnType<sum>



function getDate(timestampInSec: number): Date;
function getDate(standartDateString: string): Date;
function getDate(y: number, m: number, d: number): Date;
function getDate(some: string | number, m?: number, d?: number){
	if(m !== undefined){
		return new Date(`${some}-${m}-${d}`)
	}
	else if(typeof some === 'string'){
		return new Date(some);
	}
	else if(typeof some === 'number'){
		return new Date(some * 1000);
	}
	else{
		throw new Error('incorrect call')
	}
}

console.log(getDate(2023, 11, 23));
console.log(getDate('2023-11-23'));
console.log(getDate(15e8));

getDate('a')

/* 
function getDate(timestampInSec: number): Date{
	return new Date(timestampInSec)
}

function getDate(standartDateString: string): Date{
	return new Date(standartDateString)
}

function getDate(y: number, m: number, d: number): Date{
	return new Date(`${some}-${m}-${d}`)
} */