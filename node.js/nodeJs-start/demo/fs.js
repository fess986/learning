// работа с файловой системой
const fs = require('fs');
const path = require('path')

// fs.mkdir(path.join(__dirname, 'testdir'), (err) => {  // в большинстве коллбэков первый аргумент - объект ошибки
//     if (err) {
//         throw err
//     }
//     console.log('directory created!')
// })

const filePath = path.join(__dirname, "testdir", "text.txt")

fs.writeFile(filePath, "text of file", (err) => {  // полностью перетирает файл
  if (err) {  // если ошибку не обработать, то мы тупо не узнаем о ее существовании - скрипт как бы выполнится, на самом деле нет
    throw err
  };

  console.log('writting file')
})

fs.appendFile(filePath, "\nsecond text", (err) => {  // добавляет к файлу
    if (err) {  
      throw err
    };
  
    console.log('writting file')
  })

fs.readFile(filePath, (err, content) => {
  if (err) {
    throw err
  };
  const data = Buffer.from(content);
  console.log('data from file:\n ', data.toString())  // переводим в обычную строку
})

fs.readFile(filePath, 'utf-8', (err, content) => {  // почему то вызывается раньше предыдущего
    if (err) {
      throw err
    };
    console.log('\nagain data from file: ', content)  // переводим в обычную строку
  })


