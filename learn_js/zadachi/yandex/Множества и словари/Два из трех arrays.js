// Вам даны три списка чисел. Найдите все числа, которые встречаются хотя бы в двух из трёх списков.
// Формат ввода
// Во входных данных описывается три списка чисел. Первая строка каждого описания списка состоит из длины списка n (1 ≤ n ≤ 1000). Вторая строка описания содержит список натуральных чисел, записанных через пробел. Числа не превосходят 109.
// Формат вывода
// Выведите все числа, которые содержатся хотя бы в двух списках из трёх, в порядке возрастания. Обратите внимание, что каждое число необходимо выводить только один раз. 


// const first = [1, 2 ,3 ,4]
// const second = [5, 6, 7, 8, 4]
// const third = [2, 8, 32, 57, 4]
// 2, 8, 4

// const first = [3, 1]
// const second = [1, 3]
// const third = [1, 2]
// 1 3

const first = [1, 2, 2]
const second = [3, 4, 3]
const third = [5]
// []

let matches = [];

for (i = 0; i < first.length; i++) {
  if (!matches.includes(first[i])) {
    if (second.includes(first[i])) {
      matches.push(first[i]);
      continue;
    } 
    if (third.includes(first[i])) {
      matches.push(first[i]);
    } 
  }
}

for (i = 0; i < second.length; i++) {
  console.log(first[i])
  if (!matches.includes(second[i])) {
    if (third.includes(second[i])) {
      matches.push(second[i]);
    } 
  }
}

console.log(matches)


// объединение множеств 2-х массивов можно находить через фильтры:
// let intersection = arrA.filter(x => arrB.includes(x));