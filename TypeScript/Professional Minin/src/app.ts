class Person {
  constructor(private name: string) {}  // если не укажем класс private , то в this не запишется это значение
}

const max = new Person('maxim')

console.log(max);

