// Вывод односвязного списка
// важность: 5

// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

// Напишите функцию printList(list), которая выводит элементы списка по одному.

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

const printList = (list) => {
   // console.log(list.value)
   if (list.next === null) {
       console.log(list.value)

       return;
   } else {
       
       printList(list.next)
    }

}

printList(list)
