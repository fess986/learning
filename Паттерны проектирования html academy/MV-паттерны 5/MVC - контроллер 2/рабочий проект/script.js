// всё схожее описание есть в учебном проекте
class View {
  root = document.querySelector(".catalog-page__products");

  render(items) {
    this.root.innerHTML = "";

    items.forEach((data) => {
      this.root.innerHTML += `<div class="product">
      <a class="product__link" href="#">
        <img
          class="product__image"
          src="img/products/${data.img}"
          width="360"
          height="380"
          alt="${data.title}"
        >
        <span class="button product__more-button ">
          Подробнее
        </span>
        <div class="product__details">
          <h3 class="product__title">
            ${data.title}
          </h3>
          <span class="product__price">
            ${data.price} ₽
          </span>
        </div>
       </a>
    </div>`;
    });
  }
}

class ModelGood {
  url = `${window.location.origin}/data.json`;
  data = null;

  getList(callback) {
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

class Controller {
  constructor(action) {
    const model = new ModelGood();
    const listVies = new View();

    switch (action) {
      case undefined:
        model.getList((status, data) => {
          listVies.render(data);
        });
        break;
      case "expensive":
        model.getList((status, data) => {
          data.sort((a, b) => {
            return b.price - a.price;
          });
          listVies.render(data);
        });
        break;
      case "cheap":
        model.getList((status, data) => {
          data.sort((a, b) => {
            return a.price - b.price;
          });
          listVies.render(data);
        });
        break;
      default:
        return null;
    }
  }
}

new Controller();

document.querySelector(".sorting__type").addEventListener("change", (e) => {
  new Controller(e.target.value);
});
