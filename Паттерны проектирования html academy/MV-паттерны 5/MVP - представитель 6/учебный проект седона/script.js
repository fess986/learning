class Model {
  url = `${window.location.origin}/data.json`;
  data = null;
  count = 1;

  add() {  // прибавляем текущее количество отображаемых элементов
    this.count += 1;
  }

  getList(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", this.url, true);
    xhr.onload = () => {
      const status = xhr.status;
      if (status === 200) {
        this.data = xhr.response;
        const data = JSON.parse(xhr.response);
        if (data.length == this.count - 1) { // если предельная численность достигнута то просто пишем алерт и больше нихера не делаем
          alert("Больше предложений нет");
          callback(null, data);
        }
        data.length = this.count; // если count меньше длинны скачанного массива, то просто меняем длинну полученного массива, обрезая его. Тупо как-то, но работает.
        callback(null, data);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
  }
}

class View {
  root = document.querySelector(".hotel-list");

  template(item) {  // отрисовка одного элемента
    return `<li class="hotel-card">
        <a class="hotel-image-link" href="#">
          <img class="hotel-card-image" src="./images/${item.img}" width="300" height="206" alt="${item.title}">
        </a>
        <h3 class="hotel-card-title">${item.title}</h3>
        <div class="hotel-card-container">
          <span class="hotel-card-type">Гостиница</span>
          <span class="hotel-card-price">От ${item.price} ₽</span>
        </div>
        <div class="hotel-card-container">
          <a class="button product-card-link" href="#">Подробнее</a>
          <button class="button button-blue product-card-favorites" type="button">В избранное</button>
        </div>
        <div class="hotel-card-container">
          <div class="product-card-star">
            <span class="visually-hidden">Количество звезд.</span>
            <img class="star" src="./images/icon/star.svg" width="18" height="17" alt="Звезда.">
            <img class="star" src="./images/icon/star.svg" width="18" height="17" alt="Звезда.">
            <img class="star" src="./images/icon/star.svg" width="18" height="17" alt="Звезда.">
            <img class="star" src="./images/icon/star.svg" width="18" height="17" alt="Звезда.">
          </div>
          <div class="product-card-rating">РЕЙТИНГ: <span>${item.rate}</span></div>
        </div>
     </li>`;
  }

  init() {  // хз зачем, только путает логику приложение - мне кажется просто нужно было всё это в конструктор презентера пихнуть
    this.add = document.getElementById("add");
    let presenter = new Presenter(this);
    //Тут мы не дёргаем модель как в MVC, сообщаем об изменениях представителю
    this.add.addEventListener("click", presenter.add.bind(presenter), false);  // испоьлзуем метод add - именно presenter-а
  }

  render(data) {
    this.root.innerHTML = "";
    data.forEach((item) => {
      this.root.innerHTML += this.template(item);
    });
  }
}

class Presenter {
  constructor(view) {
    this.model = new Model();  // создаем модель
    this.view = view;  // создаем представление
    this.model.getList((status, data) => {  // отображаем начальное состояние приложения, когда count равен единичке и рендерим всю залупу
      view.render(data);  // рендерим что получили
    });
  }
  add() { // метод прибавляет единичку к модели count и рендерит что получилось
    this.model.add();  // прибавляем единичку
    this.model.getList((status, data) => {
      this.view.render(data);
    });
  }
}

const view = new View();
view.init();  // один раз инициализируем, при этом создается Presenter, в которого попадет этот самый view, и сразу на кнопку навесится листнер, который будет активировать метод add презентера
