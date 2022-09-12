// Площадка для выгула собак — место, где собираются и общаются люди разных возрастов. На одной из площадок Восточного Бирюлева хозяева собак очень дружны и приглашают друг-друга на день рождения.
// Человек x не приглашает на день рождения человека y если выполнено хотя бы одно из условий:
// - (Возраст человека y) <= 0.5 * (Возраст человека x) + 7
// - (Возраст человека y) > (Возраст человека x)
// - (Возраст человека y) > 100 и одновременно с этим (Возраст человека x) < 100
// Во всех остальных случаях человек x приглашает человека y на день рождения.
// Определите суммарное количество приглашений на день рождения.
// Формат ввода
// В первой строке вводится число n (1 ≤ n ≤ 100000).
// Во второй строке вводится n чисел — возраст людей. Возраст находится в промежутке от 1 до 120.
// Формат вывода
// Выведите одно число — суммарное количество приглашений.

2
16 16
answer 2

3
17 16 18
answer 2

5
120 25 30 100 105 
answer 4


// const ages = [16, 20, 25, 40, 40, 45,90, 105, 120]
// const n = 9;

// решение методом двух указателей. сначала сортируем массив по возрастанию. потом двигаем указатели в цикле вайл, чтобы они соответствовали граничным условиям после каждой итерации по массиву. Потом проверяем расположение указателей и вычисляем количество подходящих под условия элементов

let ages = [16, 16]
const n = 2;

ages = ages.sort((a,b) => a - b)

let left = 0;
let right = 0;
let answer = 0;

for (let i = 0; i < n ; i++) {
  while ((left < n) && (ages[left] < (0.5 * ages[i] + 7))) {
    left = left + 1;
  }
  while ((right < n) && (ages[right] <= ages[i])) {
    right = right + 1;
  }
  if (right > left + 1) {
    answer = answer + right - left - 1
  }
}
console.log(right + ` right`);
console.log(answer);

// можно было после сортировки использовать бинарный поиск для поиска границ. Тоже норм решение