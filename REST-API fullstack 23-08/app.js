const express = require('express');
const path = require('path');
const {v4} = require('uuid') // маленькая библиотечка для генерации данных, в нашем случае будем через неё получать айдишник

const app = express();

let CONTACTS = [
  {id: v4(), name: 'ass1', value: 'big', marked: false}
]

app.use(express.json()); // по умолчанию нода не умеет работать с реквестами в формате json,  поэтому нужно добавить данную строку чтобы научить. Например нельзя выводить реквест в консоль

// реализация метода GET
app.get('/app/contacts', (req, res) => {
  // res.json(CONTACTS); // можно и без статуса
  res.status(200).json(CONTACTS); // указываем статус выполнения и сразу можем взаимодействовать, передавая в ответ наш подготовленный вариант контактов
})

// реализация метода POST
app.post('/app/contacts', (req, res) => {
  console.log(req.body); // это не будет работать, если не прописан mw - express.json()
  // res.json({test: 1}) // в качестве ответа просто кидаем тестовый объект
  const contact = {...req.body, id: v4(), marked: false} // обычно тут серверные проверки добавляются
  // res.json({test: 1}) // сразу несколько ответов дать нельзя, всё упадет
  res.status(201).json(contact)  // статус 201 говорит о том что что то добавилось
  CONTACTS.push(contact); // теперь даже после обновления страницы, контакты будут сохраняться, так как мы их храним на сервере
})

// реализация метода DELETE
app.delete('/app/contacts/:id1', (req, res) => {
  // console.log(req.params); // получаем объект типа {id1: 'то что прилетело в вызове после '/' '}

  CONTACTS = CONTACTS.filter(cont => cont.id !== req.params.id1)
  res.json({message: 'удаление прошло успешно'})
});

// реализация метода PUT
app.put('/app/contacts/:id1', (req, res) => {
  // console.log(req.params);
  const ind = CONTACTS.findIndex(cont => cont.id === req.params.id1)
  CONTACTS[ind] = req.body;
  res.json(CONTACTS[ind])
})

console.log(__dirname)

app.use(express.static(path.resolve(__dirname, 'client'))) // этот mw нужен для того, чтобы в index.html корректно подключались относительные пути, например тот же frontend.js


// гет запросы следует писать в коде именно внизу скрипта. Данный скрипт обрабатывает вообще все обращения на сервер
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})

app.listen(3000, () => console.log('Server has been started on 3000'));
