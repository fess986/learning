export default {};  // если не указыаем экспорт, ТС будет ругаться, если переменные в других файлах будут иметь те же названия, так как типа соберутся в один файл

// const app = document.querySelector('#app')
// app && (app.innerHTML = 'ass');

// const app = <HTMLAnchorElement>document.querySelector('.link')
// app.href = 'ass'
// // app && (app.innerHTML = 'ass');

// const app2 = document.querySelector('.link')
// if (app2 instanceof HTMLAnchorElement) {
//   app2.href = 'ass'
// }

// const app3 = document.querySelector('.link') as HTMLAnchorElement
// app3.href = 'ass'

type User1 = {
  a: string,
  b?: never,  // явно указыавем что такого поля не должно быть или оно должно принимать значение undefined
  c: string
}

type User2 = {
  a: string,
  b: string,
  c?: never  // явно указыавем что такого поля не должно быть или оно должно принимать значение undefined
}

type Users = User1 | User2;


const users : Users = {
  a: '1',
  b: '2',  // так как мы прописываем поле b, ТС понимает что мы не в ветке User1, и смотрит дальше, - определяет что мы в ветке User2
}
const user1 = users;  // TS понимает что тип User2


const ass : never = 1;  // ошибка, так как такой переменной вообще не должно существовать

// тут всё работает, так как будет ошибка и функция никогда не завершится и ничего не вернёт
const throwErr = () : never => {
throw new Error('ass')
}

interface Window {
a : '123',
}