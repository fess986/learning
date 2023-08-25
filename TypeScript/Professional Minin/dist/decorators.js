"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// для того чтобы использовать декораторы, необходимо в настройках конфига включить это  "experimentalDecorators": true, 
console.log('decorators');
// декоратор который примет класс и покажет его
function Log(constructor) {
    console.log(constructor); // сюда прилетит польностью класс
}
;
function Log2(target, prop) {
    console.log(target); // сюда прилетит таргет
    console.log(prop); // сюда свойство таргета - name
}
;
let Component = class Component {
    constructor(name) {
        this.name = name;
    }
};
__decorate([
    Log2
], Component.prototype, "name", void 0);
Component = __decorate([
    Log // вызов декоратора, происходит сразу, будто мы вызвали Log(). В качестве параметра попадет комронент который идет дальше
], Component);
//# sourceMappingURL=decorators.js.map