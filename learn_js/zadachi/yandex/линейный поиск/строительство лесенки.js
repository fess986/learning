// Условие задачи:
// Вася занимается строительством лесенок из блоков. Лесенка состоит из ступенек, при этом i-ая ступенька должна состоять ровно из i блоков.
// По заданному числу блоков n определите максимальное количество ступенек в лесенке, которую можно построить из этих блоков.
// Формат ввода
// Ввводится одно число n (1 ≤ n ≤ 231 - 1).
// Формат вывода
// Выведите одно число — количество ступенек в лесенке.
// Ввод
// 5
// Вывод
// 2
// Пример 2
// Ввод
// 8
// Вывод
// 3

// решение при помощи формулы. В академии срабатывает только так: если запрашиваем из файла, а выводим через консоль от этого запроса

const fs = require('fs');
const path = require('path')

const filePath = path.join(__dirname, "input.txt")
let x = fs.readFileSync(filePath, (err, content) => {
  if (err) {
    throw err
  };
})
const n = Number(x)

// оптимальное решение через выведенную формулу

// function getStepsNumber(n) {
//   return Math.floor((Math.sqrt(8*n+1)-1)/2);
// }

console.log(getStepsNumber(n))

// решение с приблизительным значением. Ищем значения начиная с квадратного корня из n .

function getStepsNumber(n) {
  let i = Math.floor(Math.sqrt(n));
  let sum;
  while (true) {
    sum = (Math.pow(i, 2) + i) / 2;
    if (sum === n) {
      return i;
    } else if (sum > n) {
      return i - 1
    }
    i++;
  }
}

// неоптимальное тупое решение перебором

// function getStepsNumber(n) {
//   let currentRow = 1;
//   let rows = 0;
//   while (n >= currentRow) {
//     n = n - currentRow;
//     rows++;
//     currentRow++
//   }
//   return rows
// }

// console.log(getStepsNumber(5))  
// console.log(getStepsNumber(8))
// console.log(getStepsNumber(36))
// console.log(getStepsNumber(2147483647))
// console.log(getStepsNumber(2147483647))
