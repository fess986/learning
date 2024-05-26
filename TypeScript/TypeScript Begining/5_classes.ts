// возникает ошибка дуплекса, тк есть прокомпилируемые версии и в них такие же классы
class TypeScript {
	// создание обычного класса
	version: string;

	constructor(version: string) {
		this.version = version;
	}

	info(name: string) {
		return `${name} version of Ts is: ${this.version}`;
	}
}

class Car {
	// классическое создание класса
	readonly model: string; // хоть свойство и readonly, его можно  перезаписать в конструкторе класса(но больше нигде)
	readonly numberOfWeels: number = 4;

	constructor(modelName: string) {
		this.model = modelName;
	}
}

class Car2 {
	// новая возможность создания класса в ТС, полностью идентична классу Car
	readonly numberOfWeels: number = 4;
	constructor(readonly model: string) {} // создаст поле model и запишет в него  параметр конструктова
}

// МОДИФИКАТОРЫ КЛАССОВ -------------------
class Animal {
	readonly number: number = 4; // свойство которое нельзя перезаписать
	protected voice: string = ""; // есть доступ у потомков класса, но не представителей(инстансов) этого класса. Т.е. можем использовать в методах класса Cat, но в объектах - нет

	public color: string = "black"; // мы можем обращаться из всех подклассов к public- модификаторам. По умолчанию все модификаторы именно такие

	constructor() {
		this.go(); // в конструкторе можно обращаться к приватным свойствам самого класса
	}

	private go() {
		// вообще нельзя никому достучаться кроме самого класса Animal
		console.log("go!");
	}

	private voicePrivate: string = "";
	static method(): void {
		// статический метод - к нему можем обращаться напрямую из класса Animal
		console.log("Static method called");
	}
}

class Cat extends Animal {
	public setVoice(voice: string): void {
		// добавленный публичный метод
		this.voice = voice; // класс дотянулся к приватному полю предка
	}
	public getVoice(): string {
		// добавленный публичный метод
		return this.voice; // так можем дотянуться к приватному свойству
		//return this.voicePrivate   // к приватному не можем дотянуться
	}
}

const animal = new Animal();
animal.color; // доступны тока color и number

console.log(Animal.method()); // к статическому методу обращаемся напрямую
// console.log(cat.go()) // ошибка

const cat = new Cat();
cat.setVoice("mur");
// console.log(cat.voice) // ошибка доступа к защищенному полю
// console.log(cat.go()) // ошибка доступа к приватному полю

// АБСТРАКТНЫЕ КЛАССЫ. НУЖНЫ ДЛЯ ТОГО ЧТОБЫ НЕ СОЗДАВАТЬ САМИ ПО СЕБЕ КЛАССЫ, НО ПРИ ЭТОМ ОТ НИХ МОЖНО НАСЛЕДОВАТЬСЯ ---------------
abstract class Component {
	// нужны для мого чтобы от них можно было наследовать другие классы, при этом инстансы объектов невозможно от них произвести.
	abstract render(): void; // абстрактные методы. нельзя вызывать у инстансов, нужно переписать
	abstract info(): string;
}

class AppComponent extends Component {
	// наследуемся от абстрактного класса
	render(): void {
		// автокомплит хорошо помогает нам
		console.log("ass");
	}

	info(): string {
		return "info";
	}
}
