// логические типы
const isFetching: boolean = true;
const isLoading: boolean = false;

// цифровые типы
let int: number = 42;
// int = '';  // не позволяет нам переназначить число в строку даже если изначально стоит let
const float: number = 4.2
const num: number = 3e10

// строки
const str:string = 'hi'

// массивы
const numberArrray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArrray2: Array<number> = [1, 1, 2, 3, 5, 8, 13] // дженерик

const wordArray: string[] = ['hi', 'fi']

// Tuple
const contact: [string, number] = ['Fess', 123456]

// Any - позволяет работать как с обычной переменной, у котороё нет определенного типа
let variable: any = 42
variable = 'str'  // ошибки нет
variable = []

// ФУНКЦИИ -----------------
// ничего не возвращают
function sayName(name: string): void {
    console.log(name)
}
sayName('ass');

// never - используется когда функция точно выдаст ошибку или если она никогда не закончится
function throwError(message: string): never {
    throw new Error(message);
}

function infinity(): never {  // бесконечная ф-ция
    while (true) {

    }
}

// создыние новых типов-аллиасов через type
type Login = string  // аллиас Login совпадает со строкой
const login: Login = 'ass2'
// const login1: Login = 42  // так не работает

type ID = string | number  // или строка или число
const id1: ID = 123;
const id2: ID = '123';
// const id3: ID = true; // так не работает, т.к. не строка и не число

// null/undefined
type SomeType = string | null | undefined 
// при компиляции типы исчезают. Нужны чисто для разработки

