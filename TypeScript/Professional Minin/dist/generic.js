"use strict";
console.log('generic');
const cars = ['bmw', 'not bmw']; // обычный синтаксис
const cars2 = ['bmw', 'not bmw']; // дженерик
// можем уточнять для промиса тип выходного параметра. 
// так же мы могли написатьconst 'promise : Promise<string> = ... '
const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve('ass');
    }, 1000);
});
// после того как указали Promise<string> - тайпскрипт подсказывает что это строка и разрешает вызывать методы
promise.then(value => {
    console.log(value.toLocaleUpperCase());
});
///////////////////////////
// Тут мы говорим тайпскрипту, что функция будет принимать a и b - типов T R, и они будут массивами, при этом будет возвращаться объединение этих типов
const mergeObjects = (a, b) => {
    return Object.assign({}, a, b);
};
const first = mergeObjects({ a123: '1' }, { b: '2' });
console.log(first.a123); // тайпскрипт будет понимать, что в выходном объекте будет поле a123, так как мы указали это на выходе
const second = mergeObjects({ x: 3 }, { b: '2' });
console.log(second.b);
function withLength(value) {
    return {
        value,
        count: `длинна ${value.length} символов`
    };
}
console.log(withLength('привет').count); // у строки это поле есть
console.log(withLength([1, 2]).count); // у массива тоже есть поле length
// console.log(withLength(42).count); // у числа нет поэтому ТС сразу будет ругаться
console.log(withLength({ length: 40 }).count); // тут мы сами создаем объект с таким полем
//////////////////////
// тут мы говорим, что key - это ключи объекта T
function getValue(obj, key) {
    return obj[key];
}
const person = {
    name: 'max',
    age: 30,
};
console.log(getValue(person, 'name'));
console.log(getValue(person, 'age'));
// console.log(getValue(person, 'ass')) // так как такого ключа нет, ТС на нас ругается
////////////////
class Collection {
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter(i => i !== item);
    }
    get() {
        return this._items;
    }
}
// если не уточнить что коллекция number , будет ошибка, так как ТС выведет тип сам, взяв исходнык значения массива
const numCollection = new Collection([1, 2, 3]);
numCollection.add(4); // тут будет ошибка если не уточнить тип
numCollection.remove(1);
console.log(numCollection);
function createAndValidate(year, model) {
    const car = {}; //  тут мы говорим ТС-у, типа спокуха, поля точно будут совпадать с типом Car , хотя это не правда, так как они могут не попасть в выходной объект из за условий
    if (year > 2000) {
        car.year = year;
    }
    if (model.length > 3) {
        car.model = model;
    }
    return car; // тут мы еще раз убеждаем ТС в том что будет объект типа Car
}
///////////////////////
// если мы хотим защитить массив от изменения можно сделать так
const car = ['1', '2'];
// car.shift() // будет ошибка
// защита объекта от перезаписи
const car2 = {
    year: 333,
    model: 'string',
};
// car2.year = '3';  // будет ошибка перезаписи
//# sourceMappingURL=generic.js.map