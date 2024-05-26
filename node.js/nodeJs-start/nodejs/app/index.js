const calc = require('./calc');
const numbersToAdd = [
    3,
    4,
    10,
    2
];

const result = calc.sum(numbersToAdd);
console.log(`The result is: ${result}`);
// Теперь вставьте фактическую бизнес-логику в файл calc.js, который можно найти в той же папке.;
// app/calc.js
function sum (arr) {
    return arr.reduce(function(a, b) {
        return a + b;
    }, 0);
};

module.exports.sum = sum;
