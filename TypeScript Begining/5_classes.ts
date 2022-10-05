// возникает ошибка дуплекса, тк есть прокомпилируемые версии и в них такие же классы
class TypeScript {  // создание обычного класса
    version: string

    constructor (version: string) {
        this.version = version;
    }

    info(name: string) {
        return `${name} version of Ts is: ${this.version}`
    }
}

class Car {  // классическое создание класса
    readonly model: string; // хоть свойство и readonly, его можно  перезаписать в конструкторе класса(но больше нигде)
    readonly numberOfWeels: number = 4;

    constructor (modelName: string) {
        this.model = modelName
    }
}

class Car2 {  // новая возможность создания класса в ТС, полностью идентична классу Car
    readonly numberOfWeels: number = 4
    constructor (readonly model: string) {}  // создаст поле model и запишет в него  параметр конструктова
}

// МОДИФИКАТОРЫ КЛАССОВ -------------------
class Animal {
    protected voice: string = '';  // есть доступ у потомков класса, но не представителей этого класса. Т.е. можем использовать в методах Cat, но в объекте - нет
    public color: string = 'black';  // мы можем обращаться из всех подклассов к public- модификаторам. По умолчанию все модификаторы именно такие

    constructor() {   
        this.go();  // в конструкторе можно обращаться к приватным свойствам самого класса
    }
    
    private go() {  // вообще нельзя никому достучаться кроме самого класса Animal
        console.log('go!')
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {  // 
        this.voice = voice;
    }
}

const cat = new Cat();
// cat.voice
cat.setVoice('mur') 

// АБСТРАКТНЫЕ КЛАССЫ. НУЖНЫ ДЛЯ ТОГО ЧТОБЫ НЕ СОЗДАВАТЬ САМИ ПО СЕБЕ КЛАССЫ, НО ПРИ ЭТОМ ОТ НИХ МОЖНО НАСЛЕДОВАТЬСЯ ---------------
abstract class Component {  // нужны для мого чтобы от них можно было наследовать другие классы, при этом инстансы объектов невозможно от них произвести.
    abstract render(): void;  // абстрактные методы. нельзя вызывать у инстансов, нужно переписать
    abstract info(): string;
}

class AppComponent extends Component {  // наследуемся от абстрактного класса
    render(): void {  // автокомплит хорошо помогает нам
        console.log('ass')
    }

    info(): string {
        return 'info'
    }
}