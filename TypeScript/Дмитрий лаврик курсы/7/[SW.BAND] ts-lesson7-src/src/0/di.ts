export default {};

/* class A{
	private b: B;

	constructor(){
		this.b = new B();
		console.log(this.b);
	}
}

class B{

}

const a1 = new A();
a1; */

class A{
	private b: B;

	constructor(b: iPrinter){
		this.b = b;
		console.log(this.b);
	}
}

interface iPrinter{
	print: (msg: string) => void,
	ping: () => boolean
}

class B implements iPrinter{
	print(msg: string){
		console.log(msg);
	}

	ping(){
		return true;
	}
}

/* const stub: iPrinter = {
	print(msg: string){
		console.log(msg);
	},
	ping(){
		return true;
	}
}
 */
const b1 = new B();
const a1 = new A(b1);
a1;