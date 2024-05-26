class Lodash {
    compact(array) {
        return array.filter(val => Boolean(val));  // получаем только истинные значения 
        // return array.filter(val => !!val) // другой вариант проверки истинности
    }

    groupBy(array, prop) {   // сортировка массива по одинаковым свойствам prop. 
        return array.reduce((acc, i) => {
            
            const key = typeof prop === 'function' ? prop(i) : i[prop];
            if (!acc[key]) {
                acc[key] = []
            }
            acc[key].push(i);
            return acc;
        }, {})
    }
}

const ass = new Lodash;

// console.log(ass.compact([false, 42, 0 , true, null, 'hello']));
// console.log(ass.groupBy([1.1, 2.5, 3.3, 1.4], Math.floor))

module.exports = Lodash