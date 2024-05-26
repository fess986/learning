const eventEmitter = require("events")

// const emitter = new eventEmitter();

// emitter.on('anything', (data) => {
//   console.log('data is: ', data);
// })

// emitter.emit("anything", {a : 1})
// emitter.emit("anything1", 1)
// emitter.emit("anything", 'ass')

// setTimeout(() => {
//     emitter.emit("anything", {c : 3})
// }, 1500);

class Dispatchser extends eventEmitter {
  dispatch(eventName, cb) {  // добавление элементов/диспетчеризация
    console.log('dispatching');
    this.emit(eventName, cb)
  }

  subscribe(eventName, cb) {  // подписка на событие
    console.log('subscribing');
    this.on(eventName, cb);
  }
}

const disp = new Dispatchser();

disp.subscribe('ass', (data) => {  // подписаться нужно до диспатча, как в subject-е у RX-JS
  console.log('data is:', data);
})

disp.dispatch('ass', 'big ass', 'very big ass')  // big ass