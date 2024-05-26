const MAIN_CONTAINER = document.querySelector(".recipes");
const SECTION = {
  best: "Популярные рецепты",
  new: "Новинки"
};

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

const renderRecipes = (data) => {
  return `
    <li class='recipes__item'>
      <div class='recipes__inner'><img class='recipes__img' src='/static/images/content/${data.img}' alt='${data.title}'>
      <div class='recipes__box'>
        <p class='recipes__author'>
          Автор: ${data.author}
        </p>
        <h3 class='recipes__name'>${data.title}</h3>
        <p class='recipes__description'>${data.discr}</p>
          <span class='recipes__ingredients'>${data.count_ing} ингредиентов</span>
          <div class='recipes__wrapper'><a class='recipes__link' href='#'>Подробнее</a>
            <div class='recipes__stats'>
              <svg width='18' height='15' viewBox='0 0 18 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path fill-rule='evenodd' clip-rule='evenodd'
                      d='M0.25 5.0298C0.25 2.3293 2.61914 0.25 5.4 0.25C6.83347 0.25 8.09484 0.922139 9 1.79183C9.90516 0.922139 11.1665 0.25 12.6 0.25C15.3809 0.25 17.75 2.3293 17.75 5.0298C17.75 6.87967 16.9611 8.50644 15.8682 9.88154C14.7771 11.2543 13.35 12.4193 11.9835 13.366C11.4615 13.7276 10.9335 14.0611 10.4503 14.3072C9.99651 14.5383 9.47474 14.75 9 14.75C8.52526 14.75 8.00349 14.5383 7.54973 14.3072C7.06648 14.0611 6.53846 13.7276 6.01653 13.366C4.65005 12.4193 3.22287 11.2543 2.13182 9.88154C1.03888 8.50644 0.25 6.87967 0.25 5.0298ZM5.4 1.75C3.32075 1.75 1.75 3.2791 1.75 5.0298C1.75 6.43329 2.34579 7.74 3.30609 8.94822C4.26828 10.1588 5.56292 11.2269 6.87074 12.133C7.36562 12.4758 7.83174 12.7675 8.23045 12.9706C8.65865 13.1886 8.90666 13.25 9 13.25C9.09334 13.25 9.34135 13.1886 9.76955 12.9706C10.1683 12.7675 10.6344 12.4758 11.1293 12.133C12.4371 11.2269 13.7317 10.1588 14.6939 8.94822C15.6542 7.74 16.25 6.43329 16.25 5.0298C16.25 3.2791 14.6792 1.75 12.6 1.75C11.4058 1.75 10.2908 2.46342 9.59457 3.36892C9.4526 3.55356 9.23291 3.66176 9 3.66176C8.76709 3.66176 8.5474 3.55356 8.40544 3.36892C7.7092 2.46342 6.59415 1.75 5.4 1.75Z'
                      fill='#FFD84E' />
              </svg>
              <span class='recipes__count'>${data.rate}</span></div>
          </div>
        </div>
      </div>
    </li>
  `;
};

const renderSection = (data, nameSection) => {
  const getRecipesBlock = () => {
    let booksBlock = `<ul class="recipes">`;
    data.forEach(function (element) {
      booksBlock += renderRecipes(element);
    });
    booksBlock += `</ul>`;
    return booksBlock;
  };

  return `
    <section class='${nameSection}-recipes'>
      <div class='container'>
        <h2 class='${nameSection}-recipes__title section__title'>
        ${SECTION[nameSection]}
        </h2>
        ${getRecipesBlock()}
      </div>
    </section>
  `;
};

getDataFromServer(`${window.location.origin}/data.json`, function (err, data) {
  for (let field in SECTION) {
    const sectionBooks = data.filter((book) => book.type === field);
    MAIN_CONTAINER.innerHTML += renderSection(sectionBooks, field);
  }
});
