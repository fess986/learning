
// E. Путь к файлу
// Ограничение времени 	1 секунда
// Ограничение памяти 	64Mb
// Ввод 	стандартный ввод или input.txt
// Вывод 	стандартный вывод или output.txt

// В операционной системе Xunil информация обо всех файлах и директориях хранится в специальном файле в следующем формате:

// Имена файлов, и только они, содержат точку.

// Требуется по данному имени файла найти путь к нему. Если таких файлов несколько, вывести путь к файлу, который записан выше.
// Формат ввода

// В первой строке вводится имя искомого файла. Во второй строке вводится общее количество файлов и директорий. В остальных строках вводится информация о файлах и директориях в указанном выше формате (директория или файл, находящиеся внутри другой директории, отделяются одним дополнительным пробелом в начале строки). Количество строк в файле и количество символов в каждой строке не превосходит 100.
// Формат вывода

// Выведите путь к файлу в формате /директория/директория/…/файл

// Гарантируется, что такой файл есть.

// Гарантируется, что длина строки ответа не превосходит 255.


// 1.avi
// 12


// emoh
//  vonavi
//   a.doc
//   b.doc 
//  vortep
//   .bashrc
//  vorodis
//   onrop
//    1.avi
//    2.avi 
// rav
//  bil


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