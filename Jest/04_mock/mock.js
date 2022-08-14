function map(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i]));
    }
    return result;
}

module.exports = {map}

// console.log(map([1, 2, 3], (elem) => {
//   return elem * 2;
// }))