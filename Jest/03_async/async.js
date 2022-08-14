const axios = require('axios');

class Ajax {
    static echo(data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data) {
                    resolve(data)
                } else {
                    reject(new Error('Error1'))
                }

            }, 150);
        })
    }

    static async get() {  // ТЕСТ НЕ СТАЛ ПИСАТЬ, ТАК КАК НЕПОНЯТНО КАК РАБОТАТЬ С БИБЛИОТЕКОЙ AXIOS
        try {
            const responce = await axios.get('https://jsonplaceholder.typicode.com/todos');
            return responce.data
        } catch (err) {
            console.log(err)
        }


    }
}

module.exports = Ajax;

// const ass = new Ajax;
// async function ass2(request) {
//     let result = await ass.echo(request)
//     console.log(result);
// } 
// ass2('hi')