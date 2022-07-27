import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

document.addEventListener('click', () => {
  // const stream$ = new Subject();  // параметры не нужны. Вызываем subscribe до next
  // const stream$ = new BehaviorSubject('init value'); // параметр - начальное значение
  const stream$ = new ReplaySubject(3); // пар-р объем буфера, стрим можно вызывать где угодно
  stream$.subscribe((value) => { // для ReplaySubject - можно вызывать откуда угодно
    console.log(value);
  });
  stream$.next('hi');

  stream$.next('RX');
});
