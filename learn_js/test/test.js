const searchingFile = '2.avi';

const fileSystem = `emoh
 vonavi
  a.doc
  b.doc 
 vortep
  .bashrc
 vorodis
  onrop
   1.avi
   2.avi 
rav
 bil`

 // сделаем массив из элементов по разделителю строки
 fileSystemArray = fileSystem.split('\n')
 // сделаем вариант массива элементов без пробелов
 const fileSystemArrayNoSpaces = fileSystemArray.map(element => element.trim());
 // находим индекс нашего искомого файла
 const index = fileSystemArrayNoSpaces.indexOf(searchingFile);
 // ищем количество пробелов файла(другими словами глубину вложенности)
let numberOfSpaces = fileSystemArray[index].trimRight().length - searchingFile.length;

let path = searchingFile;
let calculatedSpaces = 0;

// идем по вверх по массиву от искомого элемента до корня, при этом выходя на уровень выше - убираем один пробел
for (let i = index - 1; i >=0; i--) {
    calculatedSpaces = fileSystemArray[i].trimRight().length - fileSystemArrayNoSpaces[i].length;
    if ((numberOfSpaces - 1) === calculatedSpaces) {
        path = `${fileSystemArrayNoSpaces[i]}/${path}`;
        numberOfSpaces = numberOfSpaces - 1;
}}

// добавляем начальный "/"
path = `/${path}`

console.log(path)