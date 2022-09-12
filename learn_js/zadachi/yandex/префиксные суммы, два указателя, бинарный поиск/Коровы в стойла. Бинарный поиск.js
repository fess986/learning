// На прямой расположены стойла, в которые необходимо расставить коров так, чтобы минимальное расcтояние между коровами было как можно больше.
// Формат ввода
// В первой строке вводятся числа N (2 < N < 10001) – количество стойл и K (1 < K < N) – количество коров. Во второй строке задаются N натуральных чисел в порядке возрастания – координаты стойл (координаты не превосходят 109)
// Формат вывода
// Выведите одно число – наибольшее возможное допустимое расстояние.
// 6 3
// 2 5 7 11 15 20
// output 9

const stalls = [2,5,7,11,15,20];
const k = 3;
let m = 8;

let left = 0;
let right = stalls.at(-1);

// функция, которая проверяет, наш подобранный параметр m удовлетворяет условиям задачи? Обратная функция, когда мы по этому m расставляем в стойла коров и смотрим сколько может поместиться. Если помещается больше заданного количества, значит m удовлетворительно
const isGoodNumber = (stalls, k, m) => {
  let prevStall = 0;
  let cowCount = 1;
  for (let i = 1; i < stalls.length; i++) {
    if (stalls[i] - stalls[prevStall] >= m) {
      prevStall = i;
      cowCount = cowCount + 1;
    }
  }
console.log(`count is `, cowCount)  // итоговое количество коров, которое можно поместить при заданном m
return (cowCount >= k)
}
console.log(isGoodNumber(stalls, k, m))

while (left < right) {
  m = Math.round((left + right + 1) / 2); // вычисляем значение, которое будем проверять примерно по середине массива
  if (isGoodNumber(stalls, k, m)) {  // сдвигаем указатели в соответствии с тем, удовлетворяет ли проверяемый параметр m условия задачи
    left = m;
  } else {
    right = m - 1
  }
}

console.log(left)  // наш итоговый ответ
