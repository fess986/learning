async function start() {
    return await Promise.resolve('i am babel async function!')
}

class Util {    // предположительно не должна была работать без дополнительного плагина
    static id = Date.now()
}

// const unused = 42;

start().then(console.log);
console.log('static id"', Util.id)