// логические типы
var isFetching = true;
var isLoading = false;
// цифровые типы
var int = 42;
// int = '';  // не позволяет нам переназначить число в строку даже если изначально стоит let
var float = 4.2;
var num = 3e10;
// строки
var str = 'hi';
// массивы
var numberArrray = [1, 1, 2, 3, 5, 8, 13];
var numberArrray2 = [1, 1, 2, 3, 5, 8, 13]; // дженерик
var wordArray = ['hi', 'fi'];
// Tuple, кортеж
var contact = ['Fess', 123456];
// Any - позволяет работать как с обычной переменной, у котороё нет определенного типа
var variable = 42;
variable = 'str'; // ошибки нет
variable = [];
// ФУНКЦИИ -----------------
// ничего не возвращают
function sayName(name) {
    console.log(name);
}
sayName('ass');
// never - используется когда функция точно выдаст ошибку или если она никогда не закончится
function throwError(message) {
    throw new Error(message);
}
function infinity() {
    while (true) {
    }
}
var login = 'ass2';
var id1 = 123;
var id2 = '123';
// при компиляции типы исчезают. Нужны чисто для разработки
