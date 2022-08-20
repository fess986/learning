// window.addEventListener('unhandledrejection', function(event) {
//     // объект события имеет два специальных свойства:
//     alert(event.promise); // [object Promise] - промис, который сгенерировал ошибку
//     alert(event.reason); // Error: Ошибка! - объект ошибки, которая не была обработана
//   });
  
//   new Promise(function() {
//     throw new Error("Ошибка!");
//   }); // нет обработчика ошибок

const apple = {
  ass: 'big',
  [Symbol.toStringTag]: 'very',
}

console.log(apple);

console.log(Object.prototype.toString.call(apple))
console.log(parseInt('42px')); // 42
console.log(parseInt('42px42')); // 42 - идет до первой ошибки
console.log(parseInt(+'42px')); // NaN
console.log(Object.getOwnPropertyDescriptors([].__proto__))
