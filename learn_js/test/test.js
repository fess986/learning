const L = 20;   // длинна стола
const N = 10;   // количество носков
const M = 8;   // наблюдения

const socksCoordinates = [[1,5], [18,20], [3,8], [4,7], [6,10], [7,11], [11,19], [12,17], [12,16], [2,3]]

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

