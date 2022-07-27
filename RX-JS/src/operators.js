import { interval, fromEvent } from 'rxjs';

import {
  filter, map, tap, take, takeLast, takeWhile, scan, reduce, switchMap,
} from 'rxjs/operators'; // работает и без указания operators

// fromEvent(document, 'click')  // все работает, но есть сабскрайб в сакскрайбе, что не очень. вместо этого воспользуемся
//   .subscribe(() => {
//     interval(300)
//       .pipe(
//         tap((val) => console.log(`Tap is:${val}`)),
//         take(10),
//         scan((acc, val) => acc + val, 0),
//       )
//       .subscribe({
//         next: (value) => {
//           console.log(value);
//         },
//         complete: () => {
//           console.log('complete');
//         },
//       });
//   });

fromEvent(document, 'click') // перенаправление потока, для одной подписки на него, вместо двух отдельных
  .pipe(
    switchMap((event) => interval(300)
      .pipe(
        tap((val) => console.log(`Tap is:${val}`)),
        take(10),
        scan((acc, val) => acc + val, 0),
      )),
  )
  .subscribe({
    next: (value) => {
      console.log(value);
    },
    complete: () => {
      console.log('complete');
    },
  });

// const stream$ = interval(300);

// stream$
//   .pipe(
//     tap((val) => console.log(`Tap is:${val}`)), // ничего не делает, нужен чисто чтобы посмотреть все входящие значения. Нужен например для дебага
//     map((val) => val * 3), // изменяем поток
//     filter((val) => val % 2 === 0), // фильтруем поток
//     take(10), // берем 10 значений
//     takeLast(5), // из 10 значений берем последние 5 значений
//     takeWhile((val) => val < 49), // берутся значения по условию
//     scan((acc, val) => acc + val, 0), // работает как обычный reduce
//     // reduce((acc, val) => acc + val, 0), //работает как scan, но при этом дожидается конца потока и выводит ОДНО число - сумму значений
//   )
//   .subscribe({
//     next: (value) => {
//       console.log(value);
//     },
//     complete: () => {
//       console.log('complete');
//     },
//   });
