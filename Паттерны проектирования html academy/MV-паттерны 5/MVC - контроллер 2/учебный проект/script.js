
class ModelHotel {  // модель - информация по гостинницам
  url = `${window.location.origin}/data.json`;
  data = null;

  getList(callback) {  // получаем список и запускаем callback, который с ним работает
    const xhr = new XMLHttpRequest();
    xhr.open("GET", this.url, true);
    xhr.onload = function () {
      const status = xhr.status;
      if (status === 200) {
        this.data = xhr.response;
        callback(null, JSON.parse(xhr.response));
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
  }
}

class View {  // отображение - показывает как будет выглядить список отелей
  root = document.querySelector(".hotel-list");

  render(items) {  // по списку рендерим карточки гостинниц
    this.root.innerHTML = "";  // для начала удаляем все отрисованные карточки

    items.forEach((data) => {
      this.root.innerHTML += `<li class="hotel-card">
          <a class="hotel-image-link" href="#">
            <img class="hotel-card-image" src="./images/${data.img}" width="300" height="206" alt="${data.title}">
          </a>
          <h3 class="hotel-card-title">${data.title}</h3>
          <div class="hotel-card-container">
            <span class="hotel-card-type">Гостиница</span>
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
       </li>`;
    });
  }
}

class Controller {  // контроллер, который по значению фильтра (action) принимает решение как их отрисовать - как есть или сначала отсортировать входящие данные
  constructor(action) {
    const model = new ModelHotel();  // изначально создаем новую модель, чтобы скачать данные заново
    const listVies = new View();  // создаем новое отображение

    switch (action) {
      case undefined:
        return model.getList((status, data) => {
          listVies.render(data);
        });
      case "expensive":
        return model.getList((status, data) => {
          data.sort((a, b) => {  // модифицируем данные при помощи сортировки
            return b.price - a.price;
          });
          return listVies.render(data);  // передаем модифицированные данные
        });
      case "cheap":
        return model.getList((status, data) => {
          data.sort((a, b) => {
            return a.price - b.price;
          });
          return listVies.render(data);
        });
      default:
        break;
    }
  }
}

new Controller();  // в начале по умолчанию отрисовываем

document.querySelector(".select-control").addEventListener("change", (e) => {
  new Controller(e.target.value);  // принимаем новое значение селекта и передаем его в контроллер
});
