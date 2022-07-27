window.addEventListener('unhandledrejection', function(event) {
    // объект события имеет два специальных свойства:
    alert(event.promise); // [object Promise] - промис, который сгенерировал ошибку
    alert(event.reason); // Error: Ошибка! - объект ошибки, которая не была обработана
  });
  
  new Promise(function() {
    throw new Error("Ошибка!");
  }); // нет обработчика ошибок