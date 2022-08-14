function add(a: number, b: number): number {
    return a + b;
}

function toUpperCase(str: string): string {
    return str.trim().toUpperCase();
}

// присвоение интерфейса функции в зависимости от ее параметров

interface MyPos {
    x: number | undefined,
    y: number | undefined,
}

interface MyPosWidthDefault extends MyPos {
    default: string;
}

function pos(): MyPos;  // такие записи для разных вариантов функций называются перезагрузками. Часто используются в библиотеках, типа лодаша и тд
function pos(a: number): MyPosWidthDefault;  // хз откуда тут ошибка
function pos(a: number, b: number): MyPos;


function pos(a?: number, b?: number) {  // все 3 типа мы учли при задании интерфейсов функции
    if (!a && !b) {
        return {x: undefined, y: undefined}
    } 
    if (a && !b) {
        return {x: a, y: undefined, default: a.toString()}
    }
    return {x: a, y: b}
}

console.log('empty: ', pos());
console.log('widh a: ', pos(15));
console.log('widh a and b: ', pos(15, 25));