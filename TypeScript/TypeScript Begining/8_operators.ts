// типы нельзя расширять, а интерфейсы объединять
// расширение интерфейса - это ключевое слово extends, в типе мы его применить не можем
// объединение это | - в интерфейсах так делать нельзя

interface Person {
    name: string;
    age: number;
}

// type Person = {
//     name: string;
//     age: number;
// }

// type Person = Record<string, number>  // говорим что объект с ключами типа стринг и значениями - number

const person2 : Person = {
name: 'ivan',
age: 32,
// adsf: 32,  // даст ошибку, так как не прописано в типе
}

/////////////////// keyof - вытаскивает из ТИПА/ИНТЕРФЕЙСА строковые значения ключей в виде объединения литералов
type PersonKeys = keyof Person // 'name' | 'age'. Таким образом мы запрещаем другие виды ключей, так как если так н сделать, можно будет добавлять любые левые ключи в объект этого типа. Если мы хотим из объекта-константы распарсить точный тип, используем связку : keyof (typeof объект-константа)

let pers: PersonKeys = 'name';
pers = 'age';
// pers = 'age2'; // ошибка, так как тут нет значений ключей Person


///////////////////// typeof - вытаскивает из КОНСТАНТЫ-ОБЪЕКТА ключи и определяет их типы

type ObjectTypes = typeof person2;
let pers2 : ObjectTypes = { 
    name: 'asgsdg',
    age: 42
}

// Exclude / Pick
type User = {
    id: number;
    name: string;
    email: string;
    create: Date;
}

type NoIdnoCreate = Exclude<keyof User, 'id' | 'create'>  // все ключи User, кроме 'id' | 'create'
type NameAndEmail = Pick<User, 'name' | 'email'> // выбранные ключи 'name' и 'email' из User

let u1: NoIdnoCreate = 'name';
u1 = 'email';

// let u2: NameAndEmail = 'name';
// u2 = 'email';


////////////////////// is - выполняет проверку, и возвращает булеан значение, при этом компилятор в первой строчке сразу приводит n к числу
function isNumber(n : unknown) : n is number {
    return typeof n === 'number'
}

///////////// asserts - работает с ошибками
function isNumber2(n : unknown) : asserts n is number {
    if (typeof n !== 'number') {
        throw new Error(`${n} is not a number`)
    }
}

/////////////// операторы объединения и пересечения 
///////////////////// пересечение интерфейсов и типов - & - получаемый тип сужается, так как необходимы будут поля и того и того объекта
//////////// объединение - | . Допустимо только для типов

interface ErrorHandling {
    success: boolean;
    error?: string ;
  }
  
  interface ArtworksData {
    artworks: string;
  }
  
  interface ArtistsData {
    artists: string;
  }

  // объедининие типов. Интерфейсы могоут объединяться так же через extends
type response = ErrorHandling & ArtistsData; // необходимы те и те данные

const response : response = {
    success: true,
    artists: 'mickael',
}

//////////////// const объединение с пересечением типов
type response2 = ErrorHandling & ({ html: string } | { markdown: string });
const response2 : response2 = {
    success: true,
    // markdown: 'sdag', // не обязательно
    html: 'asgsg',
}

////////////////// пересечение типов
type response3 = ArtworksData | ArtistsData;
const response3: response3 = {
    artists: 'dshdr', // хватит только этого поля
}

////////////////// расширение интерфейса через extends
interface Expansion extends ArtworksData { // эквивалентно ArtworksData & {count: number}
    count: number
}

const expansion : Expansion = {
    artworks: 'sdfghdrf',
    count: 42,
}
