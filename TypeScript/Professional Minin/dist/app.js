"use strict";
class Person {
    constructor(name) {
        this.name = name;
    } // если не укажем класс private , то в this не запишется это значение
}
const max = new Person('maxim');
console.log(max);
//# sourceMappingURL=app.js.map