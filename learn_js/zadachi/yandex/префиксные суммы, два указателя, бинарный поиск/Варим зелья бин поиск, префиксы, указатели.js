// Богдан учится в Хогвартсе на факультете зельеварения. Завтра ему сдавать свой выпускной проект, но он ничего не успел подготовить. У него есть n ингредиентов, из которых можно сварить зелья. Зелье может состоять либо из одного ингредиента, либо из двух различных. Каждое зелье характеризуется его полезностью. Полезность — это целое число от −106 до 106. Богдану нужно сварить k зелий так, чтобы их суммарная полезность была максимальной (полезность зелья — это сумма полезностей ингредиентов, из которых оно состоит). Очень важно, чтобы все зелья в проекте были различны. Два зелья считаются различными, если найдется хотя бы один ингредиент, который отсутствует в одном зелье, но присутствует в другом. Помогите Богдану с проектом и подсчитайте максимальную суммарную полезность зелий, которую он может получить.
// Формат ввода
// В первой строке записано два числа n и k(1≤n≤105,1≤k≤n⋅(n+1)2) - количество ингредиентов и количество зелий, которые нужно приготовить.
// В следующей строке заданы n целых чисел ai (−106≤ai≤106) — полезность ингредиентов.
// Формат вывода
// Выведите одно целое число — максимальную суммарную полезность зелий. 
// 5 5
// -2 3 -5 5 1
// вывод:
// 26

// 2 1
// -1 1

// 1


let ingredientsValues = [4, 5, -1, -5, -8, 10, 8]
const prefixValues = [];
const k = 1;

let minimumValue = 3; // проверочное число. показатель минимального качества зелья
let minIndexValue = 0; // его индекс
let M = 0;

let nextValue = 0;

// сортируем и добавляем нолик для массива наших полезностей
ingredientsValues = ingredientsValues.sort((a, b) => b - a);
ingredientsValues.unshift(0);
console.log(`ingredientsValues :`, ingredientsValues)

let left = ingredientsValues[1];
let right = ingredientsValues.at(-1);

// делаем префиксы для отсортированного массива полезности зелий

for (let i = 0; i < ingredientsValues.length; i++) {
  nextValue += ingredientsValues[i]
  prefixValues.push(nextValue)
}
console.log(`prefixValues :`, prefixValues)

const isMinValueFits = (minValue) => {
  let leftPointer = 0;
  let rightPointer = 0;
  let countPotion = 0; // количество зелий
  let generalValue = 0;

  // посчитаем сколько суммарной полезности можно получить если бы мы брали только по одному зелью. При этом так же просуммируем количество этих зелий
  for (let i = 1; i < ingredientsValues.length; i++) {
    if (ingredientsValues[i] <= minValue) {
      break;
    }
    countPotion++;
    generalValue += ingredientsValues[i];
  }

  leftPointer = 1; // левая граница. НЕ ВКЛЮЧИТЕЛЬНО
  rightPointer = ingredientsValues.length - 1; // правая граница. ВКЛЮЧИТЕЛЬНО

  // считаем ценность и количество двухсоставных зелий
  while (leftPointer < rightPointer) {
    // ищем правую границу области вхождения подходящих результатов
    while (((ingredientsValues[rightPointer - 1] + ingredientsValues[leftPointer]) <= minValue) && (rightPointer > leftPointer)) {
      rightPointer -= 1;
    }
    countPotion += rightPointer - leftPointer + 1;
    generalValue += (prefixValues[rightPointer] - prefixValues[leftPointer - 1] + ((rightPointer - leftPointer + 1) * ingredientsValues[leftPointer]))

    leftPointer++;
  }
  console.log(leftPointer, rightPointer)
  console.log(countPotion)

  if (countPotion >= k) {
    return generalValue - (countPotion - k) * minValue;
  } else {
    return false
  }
}

while (left > right) {
  // console.log('ass')
  M = Math.round((left + right + 1) / 2);
  if (isMinValueFits(M)) {
    right = M 
    // console.log('ass')
  } else {
    left = M - 1;
    // console.log('ass')
  }
}
console.log (left, right, isMinValueFits(left))

// isMinValueFits(6);

// console.log(Math.round(-6.5))