const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((request, response) => {
    // response.writeHead(200, {  // ответ 200. Контент читаем как обычный текст
    //   'Content-Type' : "text/plain"
    // })
    //response.end('<h1>start server...</h1>');  // выводим в качестве строки хтмл-теги

    // console.log(request.url);

    // if (request.url === '/main.html') {  // в зависимости от того что в запросе url (например по нажатию ссылки) - считываем файл и кидаем его содержимое в респонс
    //     fs.readFile(path.join(__dirname, 'public','main.html'), (err, data) => {
    //         if (err) {
    //             throw err
    //         };
    //         response.writeHead(200, { // ответ 200. Контент читаем как html
    //             'Content-Type': "text/html"
    //         })
    //         response.end(data);
    //     })
    // } else if (request.url === '/contacts.html') {
    //     fs.readFile(path.join(__dirname, 'public', 'contacts.html'), (err, data) => {
    //         if (err) {
    //             throw err
    //         };
    //         response.writeHead(200, { // ответ 200. Контент читаем как html
    //             'Content-Type': "text/html"
    //         })
    //         response.end(data);
    //     })
    // }

    let filePath = path.join(__dirname, 'public', request.url); // универсальное решение для любого файла. Можно добавить проверку на корневой элемент "/" вместо request.url
    let ext = path.extname(filePath);
    let extType = 'text/html'

    switch (ext) {  // в зависимости от типа файла меняем тип считываемого контента
        case '.css':
            extType = 'text/css'
            break
        case '.js':
            extType = 'text/javascript'
            break
        default: 
        extType = 'text/html'
    }

    if (!ext) { // если запрос без расширения, то добавим его
        filePath = filePath + '.html'
    }

    fs.readFile(filePath, (error, content) => {
        if (error) {
            console.log('errrrrrrrrrrrroooooooorrrrrr');
            fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {

                if (err) {
                    response.writeHead(500);
                    response.end();
                };

                response.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                response.end(data);
            })
        } else {
            response.writeHead(200, {
                'Content-Type': extType
            })
            response.end(content);
        }


    })

    console.log(filePath)
    console.log(ext)
})

let PORT = process.env.PORT || 3000

//console.log(process.env)

server.listen(PORT, () => {
    console.log(`server has been started on port ${PORT}`);
})