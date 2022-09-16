// C. Носки
// Ограничение времени 	1 секунда
// Ограничение памяти 	64Mb
// Ввод 	стандартный ввод или input.txt
// Вывод 	стандартный вывод или output.txt
// Имеется стол длины L. На столе разложено N носков так, что никакой носок не вылезает за границы стола. Далее имеется умный мальчик Васька, который хочет замерить толщину покрытия стола носками в M точках.
// Формат ввода
// Во входном файле даны сначала L, N, M (1 ≤ L ≤ 10000, 1 ≤ N ≤ 10000, 1 ≤ M ≤ 100000).

// Далее идут N пар чисел l ≤ r от 1 до L – левые и правые концы носков.

// Затем идут M чисел от 1 до L интересующие Васька точки.

// Все числа целые.
// Формат вывода

// Выведите M чисел – толщину носкового покрытия в каждой точке.

// 22 18 8
// 6 11
// 10 15
// 3 18
// 1 19
// 10 17
// 1 10
// 6 16
// 20 21
// 1 1
// 12 21
// 5 9
// 1 10
// 5 10
// 6 11
// 5 6
// 7 11
// 1 19
// 13 15
// 5
// 22
// 19
// 3
// 8
// 16
// 16
// 21

// output
// 8
// 0
// 3
// 5
// 11
// 6
// 6
// 2

const L = 20; // длинна стола
const N = 10; // количество носков
const M = 8; // наблюдения

const socksCoordinates = [
    [1, 5],
    [18, 20],
    [3, 8],
    [4, 7],
    [6, 10],
    [7, 11],
    [11, 19],
    [12, 17],
    [12, 16],
    [2, 3]
]

const tests = [1, 3, 5, 8, 10, 13, 17, 20];

let results = [];
let socksCount = [];

const startSock = 1;
const endSock = 3;
const testSock = 2;


for (let i = 0; i < socksCoordinates.length; i++) {
    console.log(socksCoordinates[i]);
    socksCount.push([socksCoordinates[i][0], startSock]);
    socksCount.push([socksCoordinates[i][1], endSock]);
}

for (let i = 0; i < tests.length; i++) {
    console.log(socksCoordinates[i]);
    socksCount.push([tests[i], testSock]);
}

const sortDoubleArray = (a, b) => {
    if (a[0] > b[0]) {
        return 1;
    }
    if (a[0] < b[0]) {
        return -1;
    }
    if (a[0] === b[0]) {
        if (a[1] > b[1]) {
            return 1;
        }
        if (a[1] < b[1]) {
            return -1;
        }
        return 0;
    }
}

socksCount.sort(sortDoubleArray)
console.log(socksCount)

let count = 0;

for (let i = 0; i < socksCount.length; i++) {
    console.log(socksCount[i])
    if (socksCount[i][1] === 1) {
        count++
    }
    if (socksCount[i][1] === 2) {
        results.push(count)
    }
    if (socksCount[i][1] === 3) {
        count--
    }
    console.log(count)
}

console.log(results);