import { interval } from 'rxjs';
import {
  map, filter, take, scan,
} from 'rxjs/operators';

const btn = document.getElementById('interval');
const rxjsBtn = document.getElementById('rxjs');
const display = document.querySelector('#problem .result');

const people = [
  { name: 'Vladilen', age: 25 },
  { name: 'Elena', age: 17 },
  { name: 'Ivan', age: 18 },
  { name: 'Igor', age: 14 },
  { name: 'Lisa', age: 32 },
  { name: 'Irina', age: 23 },
  { name: 'Oleg', age: 20 },
];

btn.addEventListener('click', () => {
  const canDrink = [];

  for (let i = 0; i < people.length; i += 1) {
    if (people[i].age > 18) {
      canDrink.push(people[i]);
    }
  }
  let i = 0;
  const interval1 = setInterval(() => {
    if (i < canDrink.length) {
      display.textContent += `${canDrink[i].name} `;
      i += 1;
    } else {
      clearInterval(interval1);
    }
  }, 1000);
});

rxjsBtn.addEventListener('click', () => {
  rxjsBtn.disabled = true;
  interval(500) // выдаем поток 0..1..2 и тд с интервалом в 100 мс
    .pipe(
      take(people.length), // берем такое кол-во значений потока
      filter((value) => people[value].age >= 18), // проверяем значение
      map((value) => people[value].name), // заменяем значение на имя
      scan((acc, value) => acc.concat(value), []), // получаем итоговый массив
    )
    .subscribe((res) => { // в итоге получившиеся значения потока джойним
      display.textContent = res.join(' ');
      // eslint-disable-next-line max-len
    }, null, () => { rxjsBtn.disabled = false; }); //  1 параметр у subscribe - что делаем, второй - что делаем если ошибка, 3 - что делаем в финале выполнения (комплит)
});
