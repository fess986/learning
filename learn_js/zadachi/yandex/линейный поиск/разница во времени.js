// Разница во времени
// Каждые сутки на вокзал прибывает n электричек. По заданному расписанию прибытия электричек определите минимальное время между прибытием двух разных электричек.
// Формат ввода
// В первой строке задано число n (1 ≤ n ≤ 2 × 104) — количество электричек.
// Во второй строке задано n моментов времени в формате HH:MM (0 ≤ HH ≤ 23, 0 ≤ MM ≤ 59) через пробел.
// Формат вывода
// Выведите одно число — минимальное время в минутах между прибытием двух электричек.


// const nString = '7';
// const inputString = '15:25 23:11 18:15 04:54 13:46 00:59 00:00'
// const nString = '3';
// const inputString = '00:00 23:59 00:00'
// const n = +nString;
//const schedule = inputString.split(' ');

const fs = require('fs');
const path = require('path')

const filePath = path.join(__dirname, "input.txt")
let x = fs.readFileSync(filePath, (err, content) => {
  if (err) {
    throw err
  };
})
const unixCode = x.toString();

const dataFromFile = unixCode.split('\n');
const n = Number(dataFromFile[0]);
const array = dataFromFile[1].split(' ');
const schedule = dataFromFile[1].split(' ');
let minDelay;

const getNinimumDelay = () => {
    // переведем всё это дело в минуты
  const SheduleInMinutes = schedule.map((schedule) => {
    if (schedule === '00:00') {
      return 1440;
    } else {
      return (Number(Number(schedule.slice(0, 2)) * 60) + Number(schedule.slice(3, 5)))
    }
  })

  SheduleInMinutes.sort((a, b) => b - a);  // отсортируем
  minDelay = 1440 - SheduleInMinutes[0] + SheduleInMinutes[SheduleInMinutes.length - 1];  // смотрим на границах между днями

  for (i = 0; i < n - 1; i++) {
    if ((SheduleInMinutes[i] - SheduleInMinutes[i + 1]) < minDelay) {
      minDelay = SheduleInMinutes[i] - SheduleInMinutes[i + 1];
    }
  }
  return minDelay
}

console.log(getNinimumDelay());