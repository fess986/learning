const HOTEL_CONTAINER = document.querySelector(".hotel-list");

const Model = {  // ничего не умеет кроме скачивания данных
  get: (url, callback) => {
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
  }
};

const View = { // ничего не умеет кроме отрисовки карточки
  render: (data) => {
    return `
      <li class="hotel-card">
        <a class="hotel-image-link" href="#">
          <img class="hotel-card-image" src="./images/${data.img}" width="300" height="206" alt="${data.title}">
        </a>
        <h3 class="hotel-card-title">${data.title}</h3>
        <div class="hotel-card-container">
          <span class="hotel-card-type">${data.type} </span>
          <span class="hotel-card-price">От ${data.price} ₽</span>
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
          <div class="product-card-rating">РЕЙТИНГ: <span>${data.rate}</span></div>
        </div>
      </li>
    `;
  }
};

const ViewModel = {
  filterCheckbox: document.querySelectorAll(".catalog-filter-item .control"),  // хранит все чекбоксы

  ass: function() {
    console.log(this)  // сам объект если объявляем через function
  },

  init: () => {  // инициализация - которая и всё отрисовывает и листнеры вешает
    console.log(ViewModel.filterCheckbox)
    console.log(this)  // объект window, так как объявлена стрелочная функция

    ViewModel.filterCheckbox.forEach((element) => {  // обращаться к собственным полям в объекте необходимо через ViewModel. Так как this тут не работает
      element.addEventListener("click", (element) => {  // вешаем на каждый чекбокс метод отрисовки и передаем в него имя нажатого чекбокса
        ViewModel.render(element.target.value);
      });
    });
    ViewModel.render();  // первоначально отрисовываем все карточки, так как параметров нету
  },
  render: (filter) => {
    Model.get(`${window.location.origin}/data.json`, function (err, data) {
      const filteredData = filter  // если фильтров нет - то передаем чисто дату, если есть, то фильтруем по полю type
        ? data.filter((el) => el.type === filter)
        : data;

      HOTEL_CONTAINER.innerHTML = "";  // обнуляем контейнер
      filteredData.forEach((element) => {
        HOTEL_CONTAINER.innerHTML += View.render(element);
      });
    });
  }
};

ViewModel.init();  // инициализируем приложение
ViewModel.ass();

const chain = {
  name: '1',
  surname: '2',
  setName(name) {
    this.name = name
    return this
  },
  setSurname(surname) {
    this.surname = surname
    return this
  },
  showName() {
    console.log(this.name + this.surname)
    // return this.name + this.surname
  }
}

chain.setName('max').setSurname('karpov').showName()
