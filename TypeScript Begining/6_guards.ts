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
    size: "L"
}
type TypeOfProps = typeof props; // теперь в TypeOfProps запишется интерфейс вида:
// interface TypeOfProps {
//     class: string
//     count: number;
//     size: string;
// }

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
