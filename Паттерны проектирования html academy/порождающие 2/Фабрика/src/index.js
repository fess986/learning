console.log("ass");

// по данному списку мы должны проитерироваться и в соответствии с типом карточки отобразить строки с определенными стилями
const PEOPLE_LIST = [
	{
		name: "Иван",
		specialist: "Врач",
	},
	{
		name: "Владимир",
		specialist: "Преподаватель",
	},
	{
		name: "Виталий",
		specialist: "Студент",
	},
];
const ROOT = document.getElementById("app");

// создаем классы которые отрисовывают карточки. Названия методов у каждого класса РАЗНЫЕ, смысл паттерна ФАБРИКА как раз в том чтобы из разных методов сделать один универсальный
class Doctor {
	create(name) {
		return `<div class="doctor">Карточка врача: ${name}</div>`;
	}
}

class Teacher {
	render(name) {
		return `<div class="teacher">Карточка преподавателя: ${name}</div>`;
	}
}

class Student {
	get(name) {
		return `<div class="student">Карточка студента: ${name}</div>`;
	}
}

// создаем универсальный отрисовывающий метод
// в учебном проекте в метод create в качестве вводных данных - объект. Наверное это более удобный способ
class Fabric {
	create(type, name) {
		switch (type) {
			case "Врач":
				console.log("Врач");
        return new Doctor().create(name)
				break;
			case "Преподаватель":
				console.log("Преподаватель");
        return new Teacher().render(name)
				break;
			case "Студент":
				console.log("Студент");
        return new Student().get(name)
				break;
			default:
				console.log("default");
		}
	}
}

// new Fabric().create("Врач");
// new Fabric().create("Преподаватель");
// new Fabric().create("Студент");
// new Fabric().create("stjhdryjty");

// const doc = new Doctor();
// const teacher = new Teacher();
// const student = new Student();

// ROOT.innerHTML += doc.create("Иван");
// ROOT.innerHTML += teacher.render("Владимир");
// ROOT.innerHTML += student.get("Виталий");

// ROOT.innerHTML += new Fabric().create("Врач", '123');
// ROOT.innerHTML += new Fabric().create("Преподаватель", '456');
// ROOT.innerHTML += new Fabric().create("Студент", '789');

// идём по массиву и отрисовываем все элементы, при этом нас уже не интересует изначальное название метода отрисовки
PEOPLE_LIST.map(person => {
  ROOT.innerHTML += new Fabric().create(person.specialist, person.name);
})

// class MyClass {
//   static staticProperty = 'small ass';

//   constructor() {
//     this.property = 'big ass';

//     console.log(new.target) // new без target не вызывается
//     console.log(new.target === MyClass)
//   }

//   method() {
//     console.log(this.property);
//     console.log(new.target)
//   }

//   static staticMethod() {
//     console.log(this.staticProperty); // small ass - так как статические свойства можно использовать, при этом обычное property - будет undefined
//     console.log(new.target) // undefined - так как вызов без new
//   }
// }

// console.log(MyClass.staticProperty)  // вызываем у самого класса - small ass

// class MySecondClass extends MyClass {
//   constructor() {
//     super();
//   }
// }

// console.log(MySecondClass)

// MyClass() // ошибка - без new не вызывается
// MyClass.staticMethod(); // 
// const ass = new MyClass();
// ass.method()


// const ass2 = new MySecondClass();
// ass2.method()
// console.log(ass2.property); // big ass


class MyClass {
  property2 = 'small ass';

  constructor() {
		const obj123 = {}
		obj123.prop = 'ass'
    this.property1 = 'big ass';
		return this;
  }

  method() {
    console.log(this.property);
  }

}

const obj123 = new MyClass();
console.log(obj123);
console.log(MyClass);
