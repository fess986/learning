// дженерик - это проще говоря шаблон типов.
// и объявление и вызов дженерика осуществляется при помощи угловых скобок <>
// есть стандартные дженерики, например Record<> для объекта
// создаем простейший дженерик
const arrayOfNumbers: Array<number> = [1, 1, 2, 3 , 5]
const arrayOfStrings: Array<string> = ['one', 'two']

function reverce1<T>(array: T[]): T[] {   // В "Т" как бы записывается переменная, которую мы потом можем использовать для определения типов 
    return array.reverse();
}
reverce1(arrayOfNumbers)
reverce1(arrayOfStrings)

// интерфейсы-дженерики
interface LikeButton<T> {  // объявление дженерика-интерфейса. Теперь при вызове вместо Т подставится требуемое значение. "Т" - можно заменить на другую латинскую заглавную букву
    className: string;
    count: number;
    size: T;
}

const button: LikeButton<number> = {  // при вызове вместо Т вписываем то, что мы хотим использовать
    className: 'hi',
    count: 10,
    size: 5,
}

////////////////////////////// Omit
type LikeButtonWithoutCount = Omit<LikeButton<string>, 'size'> // при вызове LikeButton всё равно требуется ввести уточнение, даже несмотря на то, что поле size, которое требовал дженерик - отсутствует. При этом если мы неправильно напишем, скажем size1,  то ничего не исключится

const buttonWithoutCount : LikeButtonWithoutCount = {
    className: 'hi',
    count: 10,
    // size: '8',
}

//////////////////////// Pick
type LikeButtonWithCount = Pick<LikeButton<string>, 'size' | 'count'> // берем два поля из интерфейса LikeButton

const buttonWithCount : LikeButtonWithCount = {
size: 'Big',  // уточнен в дженерике
count: 10,
}

