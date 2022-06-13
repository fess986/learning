let myString = 'Привет я тестовая строка';
const asNumber = '100';
let emptyString = '';
const quaters = 'работа с кавычками можно в одинарные "двойные" а можно отдельно экранировать \"  ';  //через обратный слэш можно еще некотрые позиции шифровать, такие как табуляция, удаление предыдущего символа и тд

//использование обратных кавычек
let guestList = `Guests:
 * John
 * Pete
 * Mary
`;
alert(guestList); // список гостей, состоящий из нескольких строк

//для обычных кавычек нужно использовать специальные символы \n
let guestList = "Guests:\n * John\n * Pete\n * Mary";
alert(guestList); // список гостей, состоящий из нескольких строк

// использование спец символов
// ©
alert( "\u00A9" );
// Длинные юникодные коды
// 佫, редкий китайский иероглиф
alert( "\u{20331}" );
// 😍, лицо с улыбкой и глазами в форме сердец
alert( "\u{1F60D}" );

console.log(myString.length);  // длинна строки
console.log(+asNumber);  //  перевод строки в число
console.log('Длинна строки: "'+ myString + '" равна ' + myString.length);
console.log(quaters);
myString += ' с добавкой';
console.log(myString);
emptyString = myString[0];
console.log(emptyString);
myString[0] = 'Х';  //строку нельзя изменить адресно. только полностью переназначив ее
console.log(myString);  //осталась старая версия
myString = '  переназначенная строка';
console.log(myString);
console.log((150).toString());  //перевод числа в строку

console.log(String(160));  //перевод числа в строку
console.log(Number(asNumber));  //перевод числа в строку. если перевод не удастся, то результатом будет NaN
console.log(Boolean(asNumber));  // будет тру. Фалс в случаях 0, null,underfind, пустой строки и тд
emptyString = myString.trim();
console.log(emptyString);  //удаляет пробелы с концов строки, но не внутри
console.log(parseFloat(8.12));

// три операции в одной строке. Плохая практика
for (a = 1, b = 3, c = a * b; a < 10; a++) {
  ...
 }

// ИСПОЛЬЗОВАНИЕ МЕТОДОВ СТРОК
let str = "Привет";
alert( str.toUpperCase() ); // ПРИВЕТ

//способы получения символов из строки
let str = `Hello`;
// получаем первый символ
alert( str[0] ); // H   если символа нет вернет underfined
alert( str.charAt(0) ); // H  если символа нет вернет пустую строку
// получаем последний символ
alert( str[str.length - 1] ); // o

// перебор строки посимвольно
for (let char of "Hello") {
  alert(char); // H,e,l,l,o (char — сначала "H", потом "e", потом "l" и т. д.)
}

//ИЗМЕНЕНИЕ РЕГИСТРА
alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface
alert( 'Interface'[0].toLowerCase() ); // 'i'

let a = 'Interface';
b = a.toUpperCase();  //в b будет измененный вид, при этом а- останется прежней
c = a[0].toLowerCase();
alert(b);
alert(c);

//ПОИСК В СТРОКЕ
let str = 'Widget with id';
alert( str.indexOf('Widget') ); // 0, потому что подстрока 'Widget' найдена в начале
alert( str.indexOf('widget') ); // -1, совпадений нет, поиск чувствителен к регистру
alert( str.indexOf("id") ); // 1, подстрока "id" найдена на позиции 1 (..idget with id)
alert( str.indexOf('id', 2) ) // 12  - второй параметр показывает с какого символа начинать поиск
//так же есть метод str.lastIndexOf(substr, position) - используется для поиска с конца строки

// поиск всех вхождений в цикле
let str = "Ослик Иа-Иа посмотрел на виадук";
let target = "Иа";
let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  alert( pos );
}

//поиск совпадения нужно делать сравнивая с -1 (возвращается при отсутствии совпадения), ту если совпадение в самом начале, то возвратится 0 и проверка не сработает
let str = "Widget with id";
if (str.indexOf("Widget") != -1) {
    alert("Совпадение есть"); // теперь работает
}

//современный способ подстроки, если не нужно узнавать позицию начала
alert( "Widget with id".includes("Widget") ); // true
alert( "Hello".includes("Bye") ); // false
alert( "Midget".includes("id") ); // true
alert( "Midget".includes("id", 3) ); // false, поиск начат с позиции 3
//начинается и оканчивается определенным способом
alert( "Widget".startsWith("Wid") ); // true, "Wid" — начало "Widget"
alert( "Widget".endsWith("get") ); // true, "get" — окончание "Widget"

//ВЫРЕЗАНИЕ СТРОКИ
let str = "stringify";
// 'strin', символы от 0 до 5 (не включая 5)
alert( str.slice(0, 5) );
// 's', от 0 до 1, не включая 1, т. е. только один символ на позиции 0
alert( str.slice(0, 1) );
let str = "stringify";
alert( str.slice(2) ); // ringify, с позиции 2 и до конца
let str = "stringify";
// начинаем с позиции 4 справа, а заканчиваем на позиции 1 справа
alert( str.slice(-4, -1) ); // gif
let str = "stringify";
// ring, получаем 4 символа, начиная с позиции 2
alert( str.substr(2, 4) );  //вырезание с позиции столько то символов

//СРАВНЕНИЕ СТРОК
alert( 'a' > 'Z' ); // true  -  строчные буквы больше заглавных
alert( 'Österreich'.localeCompare('Zealand') ); // -1   -  нормальное сравнение строк по всем правилам

// символы юникода
let str = '';
for (let i = 65; i <= 220; i++) {
  str += String.fromCodePoint(i);
}
alert( str );
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ

//альтернативное задание параметров функции
function helloPerson (mes, name, age) {
  //return `${mes} ${name} ${age}`;
  return `${mes[0]} ${name} ${mes[1]} ${age} ${mes[2]}`
}
const name = 'max';
const age = 30;
//helloPerson('hi', name, age);
helloPerson `Привет ${name} чувак ${age}!`; // при таком задании в первый параметр mes передается массив ['Привет', 'чувак', '!'] , а остальные параметры считываются по порядку



//ЗАДАЧИ ---------------------------------------------------------
// Изменение регистра первой буквы
function ucFirst(str) {
  if (!str) return str;   // проверка на пустую строку
  return (str[0].toUpperCase() + str.slice(1));
}
console.log(ucFirst('привент'))

//проверка спама
//для того что бы не зависило от регистра, переводим проверяемую строку в нижний регистр
function checkSpam(str) {

    if (str.toLowerCase().includes('xxx') || str.toLowerCase().includes('viagra')) {
      return true
    }
    return false;
}
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free Xxxxx'));
console.log(checkSpam("innocent rabbit"));

// усечение строки
function truncate(str,maxlength) {
  if (str.length <= maxlength) {
    return str;
  }
  return str.slice(0,maxlength - 1) + '...';
}
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Всем привет!", 20));

//выделить число
function extractCurrencyValue(str) {
  result = '';
  for (let char of str) {
    if (isFinite(char)) {
result += char;
    }
  }
  return result;
}
console.log(extractCurrencyValue('$1265hrtj5633'));

// camelCase - дефисы убираем, а следущую после нее букву делаем заглавной
function camelize(str) {
  result = '';
  flag = true;
  for (let char of str) {
    if (char != '-') {
      if (flag) {
      result += char;
      }  else {
        result += char.toUpperCase();
      }
      flag = true;
    } else {
    flag = false;
    }
  }
  return result;
}
console.log(camelize('-webkit-transition'));
