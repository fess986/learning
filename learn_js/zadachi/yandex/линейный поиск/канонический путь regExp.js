// По заданной строке, являющейся абсолютным адресом в Unix-системе, вам необходимо получить канонический адрес.
// В Unix-системе "." соответсвутет текущей директории, ".." — родительской директории, при этом будем считать, что любое количество точек подряд, большее двух, соответствует директории с таким названием (состоящем из точек). "/" является разделителем вложенных директорий, причем несколько "/" подряд должны интерпретироваться как один "/".
// Канонический путь должен обладать следующими свойствами:
// 1) всегда начинаться с одного "/"
// 2) любые две вложенные директории разделяются ровно одним знаком "/"
// 3) путь не заканчивается "/" (за исключением корневой директории, состоящего только из символа "/")
// 4) в каноническом пути есть только директории, т.е. нет ни одного вхождения "." или ".." как соответствия текущей или родительской директории
// Формат ввода
// Вводится строка с абсолютным адресом, её длина не превосходит 100.
// Формат вывода
// Выведите канонический путь.

const fs = require('fs');
const path = require('path')

const filePath = path.join(__dirname, "input.txt")
let x = fs.readFileSync(filePath, (err, content) => {
  if (err) {
    throw err
  };
})
const unixCode = x.toString();

const getСanonicalPath = (path) => {
  if ((path === '/')) {
    // path = '/';
    return path;
  }
  path.trim();
  path = path.replace(/(?<!\.)\.\//g, '');  // убираем './', если до этого нет точки
  path = path.replace(/(?<!\.)(\.{2})\//g, ''); // убираем '../', если до этого нет точки
  path = path.replace(/\/{2,}/g, '/'); // убираем лишние слэши(превращаем их в 1)
  if (path[0] !== '/') {  // проверка, начинается ли с /
    path = '/' + path;
  }
  if ((path.endsWith('/')) && (path.length !== 1)) {  // убираем последний слэш
    path = path.slice(0, -1);
  }
  return path;
}

console.log(getСanonicalPath(unixCode))

// console.log(unixCode);
// const unixCode = '.../..//././a/g///..//dfh///.../a/g/dfh'
// const unixCode = '../../a/f..//./a/f'

// console.log(getСanonicalPath('/../../...a/.../f..//./a/f//.//'))
//console.log('/..//../')
console.log(getСanonicalPath(``))
