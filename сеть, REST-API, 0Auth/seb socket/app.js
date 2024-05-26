// https://websocketstest.com/ - на этом ресурсе можно посмотреть как работает вебсокет в реальном времени
// https://rickandmortyapi.com - прикольный сайт для работы с апишкой

// мы можем создать собственный сокет в ноде
// https://ru.hexlet.io/blog/posts/chto-takoe-websocket-i-kak-oni-voobsche-rabotayut
// const WebSocket = require('ws');
// const ws = new WebSocket.Server({ port: 8080 });

// curl https://rickandmortyapi.com/api/character/1 | jq - получение данных по сети и парсинг их через пакет jq

const output = document.querySelector('#output');
const buttonOn = document.querySelector('#on');
const buttonOff = document.querySelector('#off');
const form = document.querySelector('#form');
const messageArea = document.querySelector('#message');
const list = document.querySelector('#list');

// let socket;

buttonOn.onclick = async function(evt) {
  evt.preventDefault();

  var socket = new WebSocket('wss://echo.websocket.org')  // подключаемся к вебсокету
  console.log(socket)

  socket.onopen = () => {  // действия при открытии сокета
    setTimeout(() => {
      if (socket.readyState === WebSocket.OPEN) {
        console.log('Соединение установлено');
        socket.send('Привет, сервер!');
      } else {
        console.log('Соединение не установлено');
      }
    }, 1000);
  };

  // socket.onopen = function(event) {
  //   console.log('Socket is opened');
  //   output.innerHTML = 'Сокет открыт'
  //   // socket.send('ass')
  // }

  socket.send('ass')  // отправка сообщения на сокет

  socket.onmessage = function(event) {  // сюда прилетают сообщения с сервера в event.data
    console.log('сообщение от сокета' + event.data)
  }

  buttonOff.onclick = function(event) {
    event.preventDefault();

    socket.close(); // закрытие сокета
    return false;
  }

}

