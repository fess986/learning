const BOOKS_CONTAINER = document.querySelector(".books");
const SECTION = {
  new: "Новинки",
  best: "Лучшее"
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

class Book {
  bookTitle = "";

  render(data) {
    return `
    <li class="books__item">
     <div class="books__inner">
        <img class="books__img" src="static/images/content/books/${
          data.img
        }" alt="${data.title}" width="275" height="320">
        <div class="books__box">
           <p class="books__author">${data.author}</p>
           <h3 class="books__name">${
             this.book_title ? this.book_title : data.title
           }</h3>
           <p class="books__description">${data.discr}</p>
           <p class="books__stars">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M4.87152 2.81324C5.29957 1.74612 5.5136 1.21256 5.86132 1.13861C5.95275 1.11916 6.04724 1.11916 6.13867 1.13861C6.48639 1.21256 6.70042 1.74612 7.12847 2.81324C7.37189 3.4201 7.4936 3.72352 7.72134 3.9299C7.78522 3.98779 7.85456 4.03934 7.92839 4.08384C8.19162 4.24249 8.52022 4.27192 9.17741 4.33078C10.2899 4.43041 10.8462 4.48023 11.016 4.79739C11.0512 4.86308 11.0751 4.9342 11.0868 5.00779C11.1431 5.36315 10.7342 5.73519 9.91632 6.47927L9.68921 6.68589C9.30685 7.03376 9.11566 7.2077 9.00508 7.42477C8.93875 7.55498 8.89427 7.69521 8.87343 7.83985C8.83869 8.08098 8.89467 8.33331 9.00664 8.83796L9.04665 9.01827C9.24744 9.92329 9.34784 10.3758 9.22251 10.5982C9.10994 10.798 8.90257 10.9259 8.67351 10.9369C8.41849 10.949 8.05917 10.6562 7.34052 10.0707C6.86704 9.68484 6.63031 9.49194 6.3675 9.41658C6.12734 9.34771 5.87265 9.34771 5.63249 9.41658C5.36968 9.49194 5.13294 9.68484 4.65947 10.0707C3.94082 10.6562 3.5815 10.949 3.32648 10.9369C3.09742 10.9259 2.89005 10.798 2.77747 10.5982C2.65215 10.3758 2.75254 9.92329 2.95334 9.01827L2.99335 8.83796C3.10532 8.33331 3.1613 8.08098 3.12656 7.83985C3.10572 7.69521 3.06124 7.55498 2.99491 7.42477C2.88432 7.2077 2.69314 7.03376 2.31078 6.68589L2.08366 6.47927C1.2658 5.73519 0.856875 5.36315 0.913191 5.00779C0.924854 4.9342 0.948774 4.86308 0.983955 4.79739C1.15382 4.48023 1.71007 4.43041 2.82258 4.33078C3.47977 4.27192 3.80837 4.24249 4.07159 4.08384C4.14543 4.03934 4.21477 3.98779 4.27865 3.9299C4.50639 3.72352 4.6281 3.4201 4.87152 2.81324Z" fill="white" stroke="white"></path>
              </svg>
              <span class="books__star">${data.rate}</span>
           </p>
           <div class="books__wrapper"><a class="books__link" href="#">Подробнее</a><span class="books__pages">${
             data.count_page
           } страниц</span>
           </div>
        </div>
     </div>
    </li>
    `;
  }
  addToTitle(data) {
    this.book_title = this.title + data.title;
  }
  isBest() {
    return false;
  }
  isNew() {
    return false;
  }
  templateMethod(data) {
    // шаблонный метод, который выполняет сам алгоритм
    if ((this.isBest() || this.isNew()) && data.author !== "Беляев И.") {
      this.addToTitle(data);
    }
    return this.render(data);
  }
}

class BestBook extends Book {
  title = "🌟";
  isBest() {
    return true;
  }
}

class NewBook extends Book {
  title = "🆕";
  isNew() {
    return true;
  }
}

const renderSection = (data, nameSection) => {
  const getBooksBlock = () => {
    let booksBlock = `<ul class="books">`;
    data.forEach(function (element) {
      if (nameSection === "best") {
        booksBlock += new BestBook().templateMethod(element);
      } else if (nameSection === "new") {
        booksBlock += new NewBook().templateMethod(element);
      } else {
        console.error("type not found!");
      }
    });
    booksBlock += `</ul>`;
    return booksBlock;
  };

  return `
    <section class="${nameSection}-books">
      <div class="container">
        <h2 class="${nameSection}-books__title section__title">
          ${SECTION[nameSection]}
        </h2>
            ${getBooksBlock()}
        </ul>
      </div>
    </section>
  `;
};

getDataFromServer(`${window.location.origin}/data.json`, function (err, data) {
  for (let field in SECTION) {
    const sectionBooks = data.filter((book) => book.type === field);
    BOOKS_CONTAINER.innerHTML += renderSection(sectionBooks, field);
  }
});
