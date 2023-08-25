console.log('generic');

const cars : string[] = ['bmw', 'not bmw']; // обычный синтаксис
const cars2 : Array<string> = ['bmw', 'not bmw']; // дженерик

// можем уточнять для промиса тип выходного параметра. 
// так же мы могли написатьconst 'promise : Promise<string> = ... '
const promise = new Promise<string>(resolve => {  
  setTimeout(() => {
    resolve('ass')
  }, 1000);
})

// после того как указали Promise<string> - тайпскрипт подсказывает что это строка и разрешает вызывать методы
promise.then(value => {
  console.log(value.toLocaleUpperCase())
})


///////////////////////////
// Тут мы говорим тайпскрипту, что функция будет принимать a и b - типов T R, и они будут массивами, при этом будет возвращаться объединение этих типов
const mergeObjects = <T extends object,R extends object> (a : T, b : R) : T & R => {
  return Object.assign({}, a, b)
}

const first = mergeObjects({a123 : '1'}, {b: '2'})
console.log(first.a123) // тайпскрипт будет понимать, что в выходном объекте будет поле a123, так как мы указали это на выходе

const second = mergeObjects({x : 3}, {b: '2'})
console.log(second.b)

// const third = mergeObjects({x : 3}, 10) // а тут будет ошибка, так как тайпскрипт сразу поймет что 10 - не extends object, значит что то пошло не так
// console.log(third) 


////////////////////////
// прописываем в качестве интерфейса объект у которого обязательно должно присутствовать поле length
interface ILength {
  length: number
}

// type ILength = object & {  // так не будет работать вариант со строкой, так как она - не объект. А вот с массивом работать будет норм
//   length: number
// }

function withLength<T extends ILength>(value : T) {
  return {
    value,
    count: `длинна ${value.length} символов`
  }
}

console.log(withLength('привет').count);  // у строки это поле есть
console.log(withLength([1, 2]).count); // у массива тоже есть поле length
// console.log(withLength(42).count); // у числа нет поэтому ТС сразу будет ругаться
console.log(withLength({length:40}).count); // тут мы сами создаем объект с таким полем

//////////////////////
// тут мы говорим, что key - это ключи объекта T
function getValue<T extends object, K extends keyof T>(obj : T, key : K) {
  return  obj[key] 
}

const person = {
  name: 'max',
  age: 30,
}

console.log(getValue(person, 'name'))
console.log(getValue(person, 'age'))
// console.log(getValue(person, 'ass')) // так как такого ключа нет, ТС на нас ругается

////////////////

class Collection<T extends string | number | boolean > {
  constructor(private _items : T[] = []) {}

  add(item : T) {
    this._items.push(item)
  }

  remove(item : T) {
    this._items = this._items.filter(i => i !== item)
  }

  get() {
    return this._items
  }
}

// если не уточнить что коллекция number , будет ошибка, так как ТС выведет тип сам, взяв исходнык значения массива
const numCollection = new Collection<number>([1,2,3]); 
numCollection.add(4);  // тут будет ошибка если не уточнить тип
numCollection.remove(1);
console.log(numCollection)

// будет ошибка, так как Т не экстендится от объектов
// const objCollection = new Collection([{a:1},{b:2}]);
// objCollection.remove({b:2}); // не удалится так как объекты передаются по ссылке, и данный код не сработает
// console.log(objCollection);


///////////////

interface Car {
  year: number,
  model: string,
}

function createAndValidate(year : number, model : string) : Car {
const car : Partial<Car> = {}  //  тут мы говорим ТС-у, что car может содержать какие угодно поля и в каком угодно количестве из множества Car

if (year > 2000) {
  car.year = year
}

if (model.length > 3) {
  car.model = model
}

// car.something = 'something' // всё еще нельзя добавлять свои поля

  return car as Car; // тут мы еще раз убеждаем ТС в том что будет объект типа Car
} 


///////////////////////
// если мы хотим защитить массив от изменения можно сделать так

const car : Readonly<Array<string>> = ['1','2']
// car.shift() // будет ошибка

// защита объекта от перезаписи
const car2 : Readonly<Car> = {
  year: 333,
  model: 'string',
}
// car2.year = '3';  // будет ошибка перезаписи
