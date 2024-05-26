class BaseTheme { 
  getBackgroundColor() {
    return '#ffffff'
  }

  getTextColor() {
    return '#000000'
  }
}

class NewTheme {
  getBackgroundColor() {
    return '#c4c2c2'
  }

  getTextColor() {
    return '#593939'
  }
}

class PageInterfaces {  // базовый класс для смены темы, на самом деле можно было бы и без него обойтись
  setThemes() {
    console.log(this.constructor.name)
    throw new Error(`нужно переписать этот метод в ${this.constructor.name}`)
  }

  changeTheme() {
    throw new Error(`нужно переписать этот метод в ${this.constructor.name}`)
  }

}

class MainPageInterface extends PageInterfaces {  // класс отвечающий за создание кнопки переключения темы, а так же за её работу. Принимает 2 класса тем и обеспечивает их переключение
  newTheme = null;
  baseTheme = null;
  currentTheme = 'baseTheme';  // текущая тема
  button = document.createElement('button');
  navMenu = document.querySelector('.main-nav__list');

  setThemes(newTheme, baseTheme) {  // сохранение тем в классе
    this.newTheme = newTheme;
    this.baseTheme = baseTheme;
  }

  changeTheme(currentTheme) { // использование методов тем для смены стилей в проекте
    this.currentTheme = currentTheme === 'baseTheme' ? 'newTheme' : 'baseTheme';
    document.body.style.background = this[this.currentTheme].getBackgroundColor();
    document.body.style.color = this[this.currentTheme].getTextColor();
  }

  constructor(newTheme, baseTheme) {
    super();

    this.setThemes(newTheme, baseTheme);

    this.button.innerText = "Изменить тему";
    this.button.className = "link link--active";
    this.button.onclick = () => this.changeTheme(this.currentTheme);
    
    this.navMenu.appendChild(this.button);
    console.log(this.button)

  }
}

const newTheme = new NewTheme();
const baseTheme = new BaseTheme();
const page = new MainPageInterface(newTheme, baseTheme);




