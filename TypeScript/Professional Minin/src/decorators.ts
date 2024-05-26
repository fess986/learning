// для того чтобы использовать декораторы, необходимо в настройках конфига включить это  "experimentalDecorators": true, 
console.log('decorators');

// декоратор который примет класс и покажет его
function Log(constructor: Function) {
  console.log(constructor) // сюда прилетит польностью класс
};

function Log2(target: any, prop : string | symbol) {
  console.log(target) // сюда прилетит таргет
  console.log(prop) // сюда свойство таргета - name
};

@Log // вызов декоратора, происходит сразу, будто мы вызвали Log(). В качестве параметра попадет комронент который идет дальше
class Component {
  @Log2
  name: string

  constructor(name : string) {
    this.name = name
  }

}