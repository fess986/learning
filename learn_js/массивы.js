const myIntArray = [10, -54, 65, -12, 56, 45];
const myStrArray = ['массив', 'состоящий', 'из', 'строк'];
const myMixedArray = ['строка', 15, 34, 'и еще одна', '"Привет!"'];
const myBigArray = [
  ["the universe", 42],
  ["everything", 101010]
];
const newArray = new Array(4).fill("ass"); //создание новой сущности массива из длинны 4, но элементов в нем нет. При этом филл позволит заполнить эти поля нужными данными
let removed;


console.log(myIntArray[0]);
console.log(myIntArray[0] + myStrArray[1]);
console.log(myMixedArray[1] = 16); //можно переназначать по индексу даже для массива - константы.
console.log(myMixedArray[1]); //убеждаемся в переназначении
console.log(myBigArray[0][1]);
myBigArray.push([1, 2, 'dahheah']); //добавление массива в конец многомерного массива
myMixedArray.push('пушим'); //  ДОБАВЛЕНИЕ элемента в КОНЕЦ массива
removed = myMixedArray.pop(); //УДАЛЯЕМ ПОСЛЕДНИЙ элемент из массива
console.log(removed);
myIntArray.shift(); // УДАЛЯЕМ ПЕРВЫЙ элемент из массива
myIntArray.unshift(11); // ДОБАВЛЕНИЕ элемента в НАЧАЛО массива

var myArray = []; //заполнение массива через цикл
for (var i = 1; i <= 9; i += 2) {
  myArray.push(i);
}

for (var i = 0; i < myArray.length; i++) { //перебор массива
  console.log(myArray[i]);
}

const arr = [ //перебор значений двумерного массива
  [8, 10],
  [13, 44],
  [55, 66]
];
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

arr.length = 0; //быстрый способ очистить массив. длинну можно перезаписывать. процесс необратимый

//ПРЕВРАЩЕНИЕ ПСЕВДОМАССИВА В МАССИВ
let arrayLike = {
  0: "Hello",
  1: "World",
  length: 2
};
let arr = Array.from(arrayLike); // (*)
alert(arr.pop()); // World (метод работает)

// ПРЕВРАЩЕНИЕ ПСЕВДОМАССИВА В МАССИВ
let arrayLike = {
  0: 'понедельник', // нумерация обязательно начинается с 0
  1: 'вторник',
  2: 'среда',
  3: 'четверг',
  4: 'пятница',
  5: 'суббота',
  6: 'воскресенье',
  length: prompt('введите номер дня недели', ''), // по порядку , начиная с 1
};
let arr = Array.from(arrayLike) // к переменной arrayLike применяем метод Array.from, результат записываем в переменную arr
//alert(arr.pop()); // если length: 1, то понедельник, если 6, то воскресенье
console.log(arr);


// массив из строки
let str = '𝒳😂';
// разбивает строку на массив её элементов
let chars = Array.from(str);
alert(chars[0]); // 𝒳
alert(chars[1]); // 😂
alert(chars.length); // 2

//ПОИСК ЗНАЧЕНИЙ В МАССИВЕ. РАБОТАЕТ АНАЛОГИЧНО СТРОКАМ. СРАВНЕНИЕ ИДЕТ СТРОГОЕ ===
let arr = [1, 0, false];
alert(arr.indexOf(0)); // 1
alert(arr.indexOf(false)); // 2
alert(arr.indexOf(null)); // -1
alert(arr.includes(1)); // true  -  если не важен индекс, то самый предпочтительный метод. так же он правильно умеет обрабатывать NaN

// ПОИСК В МАССИВЕ ОБЪЕКТОВ. ВСТРЕЧАЕТСЯ ЧАСТО
//СИНТАКСИС
let result = arr.find(function (item, index, array) {
  // если true - возвращается текущий элемент и перебор прерывается
  // если все итерации оказались ложными, возвращается undefined
});
//ПРИМЕР
let users = [{
    id: 1,
    name: "Вася"
  },
  {
    id: 2,
    name: "Петя"
  },
  {
    id: 3,
    name: "Маша"
  }
];
let user = users.find(item => item.id == 1);
alert(user.name); // Вася



myIntArray.forEach((value, index, array) => console.log(value)); // метод перебора по всем элементам массива. Метод ВЫПОЛНЯЕТ некоторые действия над элементами. При этом он не может ничего возвращать

//ФИЛЬТРАЦИЯ ДАННЫХ В МАССИВЕ
let positiveArr = myIntArray.filter(function (number) { //метод фильтрации положительных данных в массиве. создает новый массив. ВОЗВРАЩАЕТ элементы массива, подходящие под условия
  return number > 0;
});
console.log(positiveArr);


let users = [{
    id: 1,
    name: "Вася"
  },
  {
    id: 2,
    name: "Петя"
  },
  {
    id: 3,
    name: "Маша"
  }
];
// возвращает массив, состоящий из двух первых пользователей
let someUsers = users.filter(item => item.id < 3);
alert(someUsers.length); // 2

const nameLengths = myStrArray.map(function (name) { // получили массив с длинами. Трансформация массива. ВОЗВРАЩАЕТ результаты выполнения функции
  return name.length;
});
console.log(nameLengths);

//СОРТИРОВКА МАССИВА. ЕСТЬ ОБЫЧНЫЙ SORT() - НО ОН СОРТИРУЕТ МАССИВ ПО ПРАВИЛАМ СТРОКИ. ДЛЯ ТОГО ЧТОБЫ НАУЧИТЬ СОРТИРОВАТЬ ЧИСЛА НУЖНО ДОБАВИТЬ ФУКЦИЮ, КОТОРАЯ ОБЪЯСНЯЕТ КАК ЭТО ДЕЛАТЬ
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
let arr = [1, 2, 15];
arr.sort(compareNumeric);
alert(arr); // 1, 2, 15
//ИЛИ БОЛЕЕ КОРОТКАЯ СТРЕЛОЧНАЯ ФУНКЦИЯ
arr.sort((a, b) => a - b);

//ПЕРЕВЕРНУТЬ МАССИВ
let arr = [1, 2, 3, 4, 5];
arr.reverse();
alert(arr); // 5,4,3,2,1
var arr = [1, -1, 2, -2, 3];

// СОЗДАНИЕ МАССИВА ИЗ СТРОКИ ПО ШАБЛОНУ
let names = 'Вася, Петя, Маша';
let arr = names.split(', ');
for (let name of arr) {
  alert(`Сообщение получат: ${name}.`); // Сообщение получат: Вася (и другие имена)
}
//  ЕСТЬ ВТОРОЙ НЕОБЯЗАТЕЛЬНЫЙ ПАРАМЕТР - ОГРАНИЧИТЕЛЬ КОЛ-ВА ЭЛЕМЕНТОВ
let arr = 'Вася, Петя, Маша, Саша'.split(', ', 2);
alert(arr); // Вася, Петя
// если не указывать пораметры, то разбитие побуквенное
let str = "тест";
alert(str.split('')); // т,е,с,т

//  ОБРАТНАЯ ФУНКЦИЯ - СБОРКА СТРОКИ ПО ШАБЛОНУ
let arr = ['Вася', 'Петя', 'Маша'];
let str = arr.join(';'); // объединить массив в строку через ;
alert(str); // Вася;Петя;Маша

//REDUCE СИНТАКСИС
let value = arr.reduce(function (previousValue, item, index, array) {
  // ...
}, [initial]);
// ВЫЧИСЛЕНИЕ СУММЫ ЭЛЕМЕНТОВ
let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0);
alert(result); // 15

//  ПРОВЕРКА МАСИВ ЛИ ПЕРЕД НАМИ? TYPEOF- НЕ СРАБОТАЕТБ ТК БУДЕТ ВЫДАВАТЬ OBJECT
alert(Array.isArray({})); // false
alert(Array.isArray([])); // true

// ПРОВЕРКА ЗНАЧЕНИЙ МАССИВА
function isPositive(number) {
  return number > 0;
}
console.log(arr.every(isPositive)); //функция проверяет если все элементы больше нуля, то возвратит тру
console.log(arr.some(isPositive)); // //функция проверяет если любой элемент больше нуля, то возвратит тру

const begin = 'начало строки ';
const result = myStrArray.reduce((accum, world, index, arr) => // в аккум изначально кладется значение переменной begin , а затем перебираются все значения массива и склеиваются в одну строку
  {
    let mess = accum + ' ' + world;
    return mess;
  }, begin);
console.log(result);

// МЕТОД УДАЛЕНИЯ И ЗАМЕНЫ ЭЛЕМЕНТОВ
let arr = ["Я", "изучаю", "JavaScript"];
arr.splice(1, 1); // начиная с позиции 1, удалить 1 элемент
console.log(arr);

let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// удалить 3 первых элемента и заменить их другими
arr.splice(0, 3, "Давай", "танцевать");
console.log(arr); // теперь ["Давай", "танцевать", "прямо", "сейчас"]

let arr = ["Я", "изучаю", "JavaScript"];
// с позиции 2
// удалить 0 элементов
// вставить "сложный", "язык"
arr.splice(2, 0, "сложный", "язык");
console.log(arr); // "Я", "изучаю", "сложный", "язык", "JavaScript"

let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// удалить 2 первых элемента
let removed = arr.splice(0, 2);
console.log(removed); // "Я", "изучаю" <-- массив из удалённых элементов
console.log(arr);

//копирование элементов
let arr = ["t", "e", "s", "t"];
alert(arr.slice(1, 3)); // e,s (копирует с 1 до 3)
alert(arr.slice(-2)); // s,t (копирует с -2 до конца)
alert(arr.slice()); // клон массива

//склейка массивов
let arr = [1, 2];
// создать массив из: arr и [3,4]
alert(arr.concat([3, 4])); // 1,2,3,4
// создать массив из: arr и [3,4] и [5,6]
alert(arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6
// создать массив из: arr и [3,4], потом добавить значения 5 и 6
alert(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6

//объект склеиваится как есть
let arr = [1, 2];
let arrayLike = {
  0: "что-то",
  length: 1
};
alert(arr.concat(arrayLike)); // 1,2,[object Object]

//но если в объекте есть специальный символ, то он склеится как массив
let arr = [1, 2];
let arrayLike = {
  0: "что-то",
  1: "ещё",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};
alert(arr.concat(arrayLike)); // 1,2,что-то,ещё

console.log([] + 1); // "1" . Массивы преобразуются в строки
console.log([1] + 1); // "11"
console.log([1, 2] + 1); // "1,21"
console.log(String(arr));

const arr = [];
//arr[0] = prompt('введите число');
let i = 0;
let flag = true;
while (flag) {
  arr[i] = prompt('введите число');
  if (arr[i] == null) {
    flag = false;
    arr.pop();
  }
  i++;
}
console.log(arr);

//ПЕРЕБОР МАССИВА
//ПО ИНДЕКСАМ
let arr = ["Яблоко", "Апельсин", "Груша"];
for (let i = 0; i < arr.length; i++) {
  alert(arr[i]);
}

//ПО ЗНАЧЕНИЯМ  - не выводит не численные свойства, но обычно это и не нужно. для ВСЕХ значений for .. in  - но он очень медленный, так что не желателен
let fruits = ["Яблоко", "Апельсин", "Слива"];
for (let fruit of fruits) {
  alert(fruit);
}


//ЗАДАЧИ НА МЕТОДЫ МАССИВОВ --------------------------------------------
// ФИЛЬТРАЦИЯ МАССИВА ПО МЕТОДУ ДРУГОГО МАССИВА
let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  }
};
let users = [{
    age: 16
  },
  {
    age: 20
  },
  {
    age: 23
  },
  {
    age: 30
  }
];
// найти пользователей, для которых army.canJoin возвращает true
let soldiers = users.filter(user => army.canJoin(user));
alert(soldiers.length); // 2


// CAMELCASE - дефисы убираем, а следущую после нее букву делаем заглавной
function camelize(str) {
  let strArray = str.split('');
  strArray.forEach(function (value, index) {
    if (value == '-') {
      strArray.splice(index, 1);
      if (index != strArray.length) {
        strArray.splice(index, 0, strArray[index].toUpperCase());
        strArray.splice(index + 1, 1);
      }
    }
  })
  return strArray.join('');
}
console.log(camelize('background-color-'));

// camelCase - дефисы убираем, а следущую после нее букву делаем заглавной/ Альтернативное решение с разбитием не на буквы а на слова
function camelize(str) {
  return str
    .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
    .map(
      // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
      // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
}
console.log(camelize('-webkit-transition'));

// задача нахождения диапазона в массиве
let arr = [5, 3, 8, 1];
function filterRange(array, min, max) {
  return array.filter(item => (min <= item && item <= max));
};
let filtered = filterRange(arr, 1, 4);
console.log(filtered);
console.log( arr ); // 5,3,8,1 (без изменений)


// удаление из массива значений между a и b.
function filterRangeInPlace (array, min, max) {
  array.forEach(function(item,index) {
    if ((item >= min) && (item <= max)) {
      array.splice(index, 1);
    }
  })
}
let arr = [5, 3, 8, 1, -10];
filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
alert( arr ); // [3, 1]

// РАСШИРЯЕМЫЙ КАЛЬКУЛЯТОР
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8


// КРУТОЙ РАСШИРЯЕМЫЙ КАЛЬКУЛЯТОР

function Calculator() {
  // ОПЕРАЦИИ ХРАНИМ В ОБЪЕКТЕ С КЛЮЧАМИ-ОПЕРАТОРАМИ И ФУНКЦИЯМИ, КОТОРЫЕ ОНИ ДОЛЖНЫ ВЫПОЛНЯТЬ
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };
// ФУНКЦИЯ ПОДСЧЕТА принимает строку вида 'a + b' (важны пробелы), затем разбивает его на массив из 3 значений, переводит их в цифры и операторы, а также проверяет на легитимность. Далее вызывает метод по основанию оператора с вычисленными значениями операндов.
    this.calculate = function(str) {
    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2]
    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    return this.methods[op](a, b);
  }
  // добавляет  новый метод в объект
  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}
let calc = new Calculator;
let powerCalc = new Calculator;
console.log(calc.calculate('3 - 5'));
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 7");
alert( result ); // 8


//  ПОИСК ЗНАЧЕНИЙ В МАССИВЕ ОБЪЕКТОВ
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);
alert( names ); // Вася, Петя, Маша
console.log(users);

//  объединение свойств объектов в массиве объектов
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };
let users = [ vasya, petya, masha ];
// плохой способ перебора
// let usersMapped = users;  //  копирование массива
// for (let i = 0; i < 3; i++) {
//   usersMapped[i].fullName = usersMapped[i].name + ' ' + usersMapped[i].surname ;
//   delete usersMapped[i].name;
//   delete usersMapped[i].surname;
// }
let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

console.log(usersMapped);


// СОРТИРОВКА ПО ВОЗРАСТУ
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let arr = [ vasya, petya, masha ];

arr.sort((a, b) => a - b);
arr.sort((a, b) => a.age - b.age);
console.log(arr);

// ПЕРЕМЕШИВАНИЕ МАССИВА СЛУЧАЙНЫМ ОБРАЗОМ. РЕЗУЛЬТАТ НЕ ОЧЕНЬ
let arr = [1, 2, 3];
function shuffle(array){
return arr.sort((a,b) => Math.random() - Math.random());
}
shuffle(arr);
console.log (arr);


//ТАСОВАНИЕ ФИШЕРА — ЙЕТСА.
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
    // поменять элементы местами
    // мы используем для этого синтаксис "деструктурирующее присваивание"
    // подробнее о нём - в следующих главах
    // то же самое можно записать как:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// ПОДСЧЁТ ВЕРОЯТНОСТИ ДЛЯ ВСЕХ ВОЗМОЖНЫХ ВАРИАНТОВ
function shuffle(array) {
  array.sort(() => Math.random() - Math.random());
}
let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};
for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}
console.log(count);

// ПОИСК СРЕДНЕГО ВОЗВРАСТА
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };
let arr = [ vasya, petya, masha ];
console.log(arr);

function getAverageAge(array) {
// длинный способ.
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
// sum += +array[i].age;
//   }
//   return sum / array.length;
//}
return arr.reduce((accum, user) => accum + user.age, 0) / arr.length;
}
alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28


// ПОИСК УНИКАЛЬНЫХ СТРОК В МАССИВЕ -----   ПОКА НЕ РАБОТАЕТ

function unique(strings) {
  //let arrayString = strings.split(', ');
let arrayString = [];
// arrayString = strings.map((item) => {
// if (!arrayString.includes(item)) {
//   arrayString.push(item);
// }
// return arrayString;
//   })
// return arrayString;
// }
arrayString = strings.filter(item => !arrayString.includes(item));
 return arrayString;
 }


let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings));
//alert( unique(strings) ); // кришна, харе, :-O
