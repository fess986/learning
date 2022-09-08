// C. КУПИТЬ И ПРОДАТЬ
// У вас есть 1000$, которую вы планируете эффективно вложить. Вам даны цены за 1000 кубометров газа за n дней. Можно один раз купить газ на все деньги в день i и продать его в один из последующих дней j, i < j.
// Определите номера дней для покупки и продажи газа для получения максимальной прибыли.
// Формат ввода
// В первой строке вводится число дней n (1 ≤ n ≤ 100000).
// Во второй строке вводится n чисел — цены за 1000 кубометров газа в каждый из дней. Цена — целое число от 1 до 5000. Дни нумеруются с единицы.
// Формат вывода
// Выведите два числа i и j — номера дней для покупки и продажи газа. Если прибыль получить невозможно, выведите два нуля. 


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

// const n = 6;
// const inputString = '5 5 5 5'
// const array = inputString.split(' ');

let bestI = 0;
let bestJ = 0;
let bestProfit = 0;
let previosBestProfit = -1;
let maxValue = 0;
let slicedArr = [];

function getBestProfit(arr) {
  for (let i = 0; i < n - 1; i++) {
    slicedArr = arr.slice(i + 1, n);
    maxValue = Math.max(...slicedArr);
    bestProfit = maxValue - arr[i];
    if ((bestProfit > 0) && (bestProfit > previosBestProfit)) {
      previosBestProfit = bestProfit;
      bestI = i + 1;
      bestJ = slicedArr.indexOf(maxValue.toString()) + bestI + 1;
    }
  }
  return `${bestI} ${bestJ}`
}

console.log(getBestProfit(array));