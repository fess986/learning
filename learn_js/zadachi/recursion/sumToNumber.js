// Вычислить сумму чисел до данного
// важность: 5

// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n

// три варианта решения через рекурсию 

// const sumTo =(n) => {
//     let sum = 0;
//     if (n === 1) {
//       sum += n ;
//     } else {
//       sum += n + sumTo(n-1)
//     }
//     return sum
//   }


// let sum = 0;
// const sumTo = (n) => {

//     if (n === 1) {
//         sum = n;
//     } else {
//         sumTo(n - 1)
//         sum += n ;
//     }
// }
// sumTo(5)
// console.log(sum)


const sumTo = (n) => {
    if (n === 1) {
        return n
    } else {
        return n + sumTo(n - 1)
    }
}

console.log(sumTo(5))

// 1+2+3+...n