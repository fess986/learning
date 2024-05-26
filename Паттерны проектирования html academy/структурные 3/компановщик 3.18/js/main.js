const ROOT_TABLE = document.getElementById("result");

const getDataFromServer = function (url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = function () {
    const status = xhr.status;
    if (status === 200) {
      callback(null, JSON.parse(xhr.response));
    } else {
      callback(status, xhr.response);
    }
  };
  xhr.send();
};

class Task {  // создание отдельной строки с входящими данными перемещаем в отдельный класс, чтобы потом можно было с ним работать
  CHECKBOX = this.createCheckbox() // помещаем метод создания элемента в константу

  createCheckbox(elem) { // создаем чекбокс для каждого элемента
    const input = document.createElement('input')
    input.type='checkbox';
    input.id = "id" + Math.random().toString(16).slice(2);
    return {element:input, id: input.id}
  }

  constructor(elem) {

    this.TR_TABLE = document.createElement('tr'); // строка с данными
    this.TR_TABLE.className = 'table__row table__row--blue'
    this.TR_TABLE.innerHTML += `
      <td>${elem.Id}</td>
      <td>${elem.state}</td>
      <td>${elem.counterparty}</td>
      <td>${elem.manager}</td>`

    this.TR_TABLE.prepend(this.CHECKBOX.element) // добавляем чекбокс в начало строки
    ROOT_TABLE.appendChild(this.TR_TABLE) // добавляем в качестве чилдрена нашу строчку
  }
}

class TaskComposite {
  ITEMS = []
  // ASS = this.createSecond();  // можно создать элемент не только из конструктора

  push(elem) {
    if (elem) {
      this.ITEMS.push(elem);
    }
  }

  createCheckbox() {  // создаем чекбокс с лейблом и навешиваем на него событие, ради которого всё и затевалось
    const input = document.createElement('input');
    input.type = 'checkbox';
    const label = document.createElement('label');
    label.innerText = 'Выделить всё';
    label.onclick = () => this.check(input.checked)  // запускаем метод который переводит все чекбоксы в нужное состояние
    label.appendChild(input)
    return label

  }

  check(value) {  // метод который проходит по всем элементам и меняет их состояние
    this.ITEMS.map((item) => {
      const currentCheckbox = document.getElementById(item.CHECKBOX.id);
      if (value && !currentCheckbox.checked) {
        return document.getElementById(item.CHECKBOX.id).click();
      } else if (!value && currentCheckbox.checked) {
        return document.getElementById(item.CHECKBOX.id).click();
      }
      return null;
    });
  }

  // createSecond() {
  //   document.querySelector(".filter-form").appendChild(this.createCheckbox());
  // }

  constructor() {  // когда мы инициализируем объект из класса запустится конструктор, который создаст наш элемент-чекбокс
    document.querySelector(".filter-form").appendChild(this.createCheckbox());
  }
}

const taskComposite = new TaskComposite();

getDataFromServer(`${window.location.origin}/data.json`, function (err, data) {
  data.map((elem) => {
    const task = new Task(elem)
    taskComposite.push(task)
  });
});
