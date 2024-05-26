"use strict";
class TypeScript {
    constructor(version) {
        this.version = version;
    }
    info(name) {
        return `${name} version of Ts is: ${this.version}`;
    }
}
class Car {
    constructor(modelName) {
        this.numberOfWeels = 4;
        this.model = modelName;
    }
}
class Car2 {
    constructor(model) {
        this.model = model;
        this.numberOfWeels = 4;
    }
}
class Animal {
    constructor() {
        this.voice = '';
        this.color = 'black';
        this.go();
    }
    go() {
        console.log('go!');
    }
}
class Cat extends Animal {
    setVoice(voice) {
        this.voice = voice;
    }
}
const cat = new Cat();
cat.setVoice('mur');
class Component {
}
class AppComponent extends Component {
    render() {
        console.log('ass');
    }
    info() {
        return 'info';
    }
}
//# sourceMappingURL=5_classes.js.map