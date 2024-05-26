import { TClientUser } from "./predicat";

export default {};

/* string[]
const a: Array<string | number> = [1, 'a', true] */

// const b: string | number[] = ['1','2']


function useState<ValueType>(initial: ValueType) {
	let value = initial;

	function setValue(newValue: ValueType){
		value = newValue;
	}

	return [ value, setValue ] as const;
}

let [val, setVal] = useState(1)
// setVal = 10  //  если бы не было as const - TS позволил бы так сделать, так как он вывел бы тип number | ((newValue: number) => void) - то есть позволил бы присвоить число
setVal(5)  // а так без as const - TS писал бы ошибку, так как number нельзя

const [ cnt, setCnt ] = useState(0);
const [ name, setName ] = useState('Dmitry');
const [ user, setUser ] = useState<TClientUser>({  // тут явно указываем, так как TS не знает такого типа по умолчанию
	type: 'client',
	id: 1,
	login: 'guest'
});

useState(true)

/* setUser({

}) */

document.body.innerHTML = `<strong onclick="${setCnt(cnt + 1)}">${cnt.toFixed(2)}</strong>`