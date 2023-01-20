// создадим интерфейс для объекта Rect
interface Rect {
    readonly id: string;  // не позволяет перезаписывать значение. константа
    color?: string;  // необязательный параметр
    size: {
        width: number;
        height: number;
    }
}

// сам объект
const myRect: Rect = {
    id: '123',  // автокомплит отлично помогает в тс
    size: {
        width: 10,
        height: 20,
    },
    color: 'blue',
    // ass: 'ass',  // ругается на неописанные св-ва
}
// myRect.id = '321'; // ошибка, тк ридонли


const myRect2: Rect = {  // поле color задаем отдельно
    id: '123',  // автокомплит отлично помогает в тс
    size: {
        width: 10,
        height: 20,
    },
}
//myRect2.color = 12;  // так ошибка типа
myRect2.color = '12';
myRect2.color = 'white';

// альтернативные способы объявления интерфейсов
const myRect3 = {} as Rect; // приведение типа. Лучше не использовать, так как не работают нормально проверки. Разве что в случаях, когда получаем данные из хз чего и нет уверенности в полной совпадухе
const myRect4 = <Rect>{} // устаревшая форма


// НАСЛЕДОВАНИЕ КЛАССОВ ---------------
interface RectWidthArea extends Rect {  // наследуемся от Rect и добавляем ф-цию
    getArea: () => number;  // функция, которая должна вернуть число
}

const rect5: RectWidthArea = {
    id: '123',  // автокомплит отлично помогает в тс
    size: {
        width: 10,
        height: 20,
    },
    getArea(): number {  // тут не обязательно указывать number, тк он уже описан в интерфейсе
        return this.size.width * this.size.height;
    }
}

// интерфейсы для классов
interface IClock {
    time: Date;
    setTime(date: Date): void;
}

class MyClock implements IClock {  // наследие для классов
    time: Date = new Date();
    setTime(date: Date): void {
        this.time = date;
    }
}

// ЕСЛИ МЫ НЕ ХОТИМ ОПИСЫВАТЬ ВСЕ КЛЮЧИ, НО ЗНАЕМ ЧТО ОНИ ВСЕ БУДУТ ОДИНАКОВЫЕ ---------------

interface Styles {
    [key: string]: string  // все ключи и значения - строки
}

const ass: Styles = {
    border: '123',
    // borderRadius: 12,  // только строка
}


