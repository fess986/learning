import {
  of, from, Observable, fromEvent, range, timer, interval,
} from 'rxjs';
import { scan, map } from 'rxjs/operators';

// const stream$ = of(1, 2, 'text', 3, 4); // позволяет забирать в поток любые перечисленыые данные
// stream$.subscribe((value) => {  // по пчереди вызываем значения
//   console.log(value)
// });

// const arr$ = from([1, 2, 3, 4, 'text']).pipe(  // берем значения из массива
// eslint-disable-next-line max-len
//   scan((acc, value) => acc.concat(value), []));  // к каждому предыдущему массиву приклееваем следущее значение
// arr$.subscribe((value) => {
//   console.log(value);
// });

const stream$ = new Observable((observer) => {
  observer.next('first value');

  setTimeout(() => { observer.next('1000ms value'); }, 1000); // не вызван тк, комплит вызывается быстрее
  setTimeout(() => { observer.complete('stop here'); }, 500); // дальше не пойдет
  setTimeout(() => { observer.error('error value'); }, 2000); // ошибка
  setTimeout(() => { observer.next('3000ms value'); }, 3000);
});



// stream$.subscribe((value) => {  // вызов при помощи коллбеков
//   console.log(value);
// }, (err) => {
//   console.log(err)
// }, () => console.log('complete'));



// stream$.subscribe({ // вызов при помощи объекта next/error/complete
//   next(val) {
//     console.log(val);
//   },
//   error(err) {
//     console.log(err);
//   },
//   complete() {
//     console.log('complete');
//   },
// });



// fromEvent(document.querySelector('canvas'), 'mousemove')
//   .pipe(
// eslint-disable-next-line max-len
//     map((ev) => ({ // из объекта события получаем упрощенный объект, который потом будем использовать для рисования
//       x: ev.offsetX,
//       y: ev.offsetY,
//       ctx: ev.target.getContext('2d'),
//     })),
//   )
//   .subscribe((pos) => {
//     // console.log(evt);
//     pos.ctx.fillRect(pos.x, pos.y, 2, 2); // рисуем прямоугольники на основе позиций
//   });
// eslint-disable-next-line max-len
// const clear$ = fromEvent(document.getElementById('clear'), 'click'); // другой вариант добавления потока через листенер - в проблем.жс
// clear$.subscribe(() => {
//   const canvas = document.querySelector('canvas');
//   canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
// });

// const sub$ = interval(500).subscribe((val) => {
//   console.log(val);
// });

// console.log(sub$)
// setTimeout(() => {
//   sub$.unsubscribe(); // отписываемся через 4 сек
// }, 4000);

// timer(2500).subscribe((value) => { console.log(value); }); // выдаем значение 0 через 2500 мс

// timer(2500).subscribe((value) => {
//   console.log(value);
// });

range(10, 20).subscribe((value) => { // поток начинается с цифры 10 и выводится 20 цифр подряд
  console.log(value);
});
