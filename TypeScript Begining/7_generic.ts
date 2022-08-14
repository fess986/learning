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


