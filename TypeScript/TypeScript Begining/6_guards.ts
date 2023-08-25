// TYPEOF --------------
function strip(x: string | number): string {  
    if (typeof x === 'number') { // typeof выдает значение  типа в виде строки
        return x.toFixed(2)
    }
    return x.trim()
}

// использование TYPEOF для того чтобы выдернуть значения из константы-объекта
const props = {
    class: 'like',
    count: 3,
    size: "L",
    exists: true,
}
type TypeOfProps = typeof props; // теперь в TypeOfProps запишется интерфейс вида:
// interface TypeOfProps {
//     class: string
//     count: number;
//     size: string;
// }

const instanceProps : TypeOfProps = {
    class: 'like',
    count: 3,
    size: "L",
    exists: false
}

type keyofProps = keyof (typeof props); // ключи этого объекта class/ count/size
type keyofProps2 = keyof TypeOfProps; // тоже самое что сверху
type obj = TypeOfProps[keyof TypeOfProps]  // string | number| boolean
type obj2 = TypeOfProps["size" | 'exists']  // string | boolean

const myObj : obj = 10;  // входит в string | number| boolean
const myObj2 : obj2 = 10; // ошибка, так как не входит в string | boolean


export enum AppRoute {
    Main = '/',
    Login = '/login',
    MyList = '/mylist',
    Film = '/films/:id/*',
    AddReview = '/films/:id/review',
    Player = '/player/:id',
  }

  type appRouteWithIdProps = keyof (typeof AppRoute); // выдирать из enum нужно так

  type typeofAppRoute = typeof AppRoute;
  const ass: typeofAppRoute = {
    Main : string,
    Login : '/login1',
    MyList : '/mylist',
    Film : '/films/:id/*',
    AddReview : '/films/:id/review',
    Player : '/player/:id',


  }

//  ИСПОЛЬЗОВАНИЕ INSTANCEOF ДЛЯ ОПРЕДЕЛЕНИЯ КЛАССА ВХОДЯЩЕЙ ФУНКЦИИ-ПАРАМЕТРА
class MyResponse {
    header = 'response header'
    result = 'responce result'
}

class MyError {
    header = 'error header'
    mesage = 'error mesage'
}

function handler(res : MyResponse | MyError) {
    if (res instanceof MyResponse) {
        return { info: res.header + res.result }
    } else {
        return { info: res.header + res.mesage }
    }
}


// ИСПОЛЬЗОВАНИЕ СТРОКОВЫХ ЛИТЕРАЛОВ
type AlertType = 'ass' | 'big ass' | 'very big ass'  // строковые литералы - позволяют задавать только одно из этих значений
function setType(value: AlertType) {
    // ..
}
setType('ass');
setType('big ass');
// setType('no ass'); // вызовет ошибку, тк нет такого литерала

// шаблонные строки
type Size = 'S' | 'M' | 'L'
type SizeLayout = `ass_${Size}` // на выходе в SizeLayout мы получим 'ass_S' | 'ass_M' | 'ass_L'. может использоваться например для модификаторов классов

// выдираем из класса при помощи InstanceType
class C {
    x = 0;
    y = 0;
}

type T0 = InstanceType<typeof C>;    

const t0 : T0 = {
    x: 1,
    y: 0,
}

//////// использование is для функций-предикатов (то есть тех, которые определяет сущность входящих параметров) 

type size = string | number;

const isString = (size : size) : boolean => {  // в данном случае TS нам не будет помогать в сужении типов 
    return typeof size === 'string';
}

const isString2 = (size : size) : size is string => {  // в данном случае TS нам поможет с выводом типов 
    return typeof size === 'string';
}

///////////// aserts - используется для определения и после этого подсказке TS-у о типе элементов
// const input : HTMLElement;  // так мы не можем написать, так как не присваиваем значение
declare const input : HTMLElement; // если мы ничего не присваиваем, но знаем о какой то переменной, например она используется в других модулях/библиотеках, то мы можем задекларировать её тип 

// функция проверяет, является ли elem инпутом, если нет то выбрасываем ошибку, при этом если проходит проверку, то TS уже сам наверняка будет знать, что это именно инпут
function isInput (elem : HTMLElement) : asserts elem is HTMLInputElement {
    if (elem.tagName !=='INPUT') {
        throw new Error('not input')
    }
}

isInput(input); // пропускаем через нашу проверку
console.log(input) // тут TS уже уверен, что данный элемент именно HTMLInputElement

// Использование infer в условных конструкциях

type myInfer<T extends any[]> = T extends (infer X)[] ? X : never; // конструкция infer используется только в условных конструкциях для того чтобы вычленить какой либо тип. В данном случае мы узнаем тип массива 
const ass123 : myInfer<number[]> = 42;  // number
const ass321 : myInfer<[string, number]> = 'ass';  // string | number так как для кортежа выьирается минимально возможный супертип
const ass3210 : myInfer<[string, number]> = 42; // string | number

// использование для переворачивание задом на перёд кортежа

type Reverse1<T extends [...any[]]> = T['length'] extends 0 | 1 // используем свойство того, что у любого кортежа есть свойство длинны
?
T // если длинна 0/1 то ничего делать не нужно
:
T extends [infer X, ...infer Y] // разворачиваем кортеж, откусывая голову и называя её Х, а остальной массив сохраняем в Y
?
[...Reverse1<Y>, X]   // переворачиваем 
:
never  // ничего не делаем если нет двух значений

type A = Reverse1<[1,2,3]> // [3,2,1]
const rev : A = [3,2,1]

// исплдблвагие infer в шаблонных строках
type Split<T extends string> = T extends '' ? [] : // проверка на пустую строку
T extends `${infer X}.${infer Y}` // проверка по шаблону. тут задействуется "жадный" поиск по строке до симвала "." - то что до него уйдет в X, остальное в Y
?
[X, ...Split<Y>] 
: // вычленяем X и рекурсивно вызываем наш тип для оставшейся строки.
 [T];  // если поиск по шаблону не прошел, то возвращаем исходное
const abc : Split<'a.b1.c'> = ['a', 'b1', 'c'];