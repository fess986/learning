// Паттерн Обсервер. 

const button = document.querySelector('button');
console.log('hi');

const observer = {
    // список функций, которые будут выполняться notify
    _observers : [],

    // добавляем функции
    addObserver(func) {
        this._observers.push(func);
    },

    // удаляем функции
    removeObserver(func) {
        console.log('removing')
        this._observers = this._observers.filter((observer) => observer !== func)
    },

    // уведомитель. навешивается на событие ха которым будем следить. Для него будут выполняться все функции из _observers
    notify() {
        this._observers.forEach((observer) => observer());
    },

}

const fn1 = () => {
    console.log('fn1');
}

const fn2 = () => {
    console.log('fn2');
}

const fn3 = () => {
    console.log('fn3');
}

observer.addObserver(fn1);
observer.addObserver(fn2);
observer.addObserver(fn3);

observer.removeObserver(fn2);

button.addEventListener('click', (evt) => {
  observer.handler();
})

