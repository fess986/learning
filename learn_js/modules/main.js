console.log('hi');
// alert('hi');

// function TodoList(props) {  //таким образом мы можем передавать объекты в функцию, обращаться к которым можно через их ключи
//     console.log(props);
//     console.log(props.todos2)
// }

// const todos1 = [
//     {id: 1, completed: false, title: 'купить вибратор'},
//     {id: 2, completed: false, title: 'купить вазилин'},
//     {id: 3, completed: false, title: 'купить расширитель'},
//   ]

//   const todos2 = [
//     {id: 1, completed: false, title: 'купить вибратор'},
//     {id: 2, completed: false, title: 'купить вазилин'},
//     {id: 3, completed: false, title: 'купить расширитель'},
//   ]


//   const ass = 5;

// TodoList({todos1, todos2, ass});

// let options = {
//     title: "My menu",
//     items: ["Item1", "Item2"]
//   };
//   // ...и она немедленно извлекает свойства в переменные
//   function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
//     // title, items – взято из options,
//     // width, height – используются значения по умолчанию
//     console.log( `${title} ${width} ${height}` ); // My Menu 200 100
//     console.log( items ); // Item1, Item2
//   }
//    showMenu(options, 300);
// //   showMenu(300);


// let arr = [1,56,34,76,23];

// // arr.forEach(item => console.log(item))
// // arr.forEach((item,index,array) => {
// //     console.log(item);
// //     console.log(index);
// //     console.log(array);
// // })


// arr.map((item,index,array) => console.log(item + 1)
// )



// let arr2 = arr.map((item,index,array) => item + 1
//  )

// // console.log(arr);
// // console.log(arr2);

// function camelize(str) {
//     return str
//       .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
//       .map(
//         // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
//         // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
//         (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//       )
//       .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
//   }
//   console.log(camelize('-webkit-transition'));

// function filterRangeInPlace (array, min, max) {
//     array.forEach(function(item,index) {
//       if ((item >= min) && (item <= max)) {
//         array.splice(index, 1);
//       }
//     })
//   }
//   let arr = [5, 3, 8, 1, -10];
//   filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
//   alert( arr ); // [3, 1]


  
//   let todos1 = [
//     {id: 1, completed: false, title: 'купить вибратор'},
//     {id: 2, completed: false, title: 'купить вазилин'},
//     {id: 3, completed: false, title: 'купить расширитель'},
//   ]

//   function toggleTodo(id) {
//     console.log(`id is`, id);
//     todos1.map(todo => {
      
//         todo.completed = !todo.completed;
      
//     //   return todo;
//     })
//   }

//   console.log(todos1);
//   toggleTodo(2);
//   console.log(todos1);


  
let arr = [1,56,34,76,23];


arr.map((item) => console.log(item + 1)
)



arr = arr.map((item) => item + 1 )

console.log(arr);
// console.log(arr2);