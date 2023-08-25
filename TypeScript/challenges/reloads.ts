// перегрузки функций
type optionsType = {
  age? : number,
  name? : string,
}

type optionsTypeWithAge = {
  age : number,
  name? : string,
}

type optionsTypeWithName= {
  name : string,
}

// напишем дженерик для того чтобы определять обязательные поля, при этом  опциональные поля тоже остаются в описании типа
 
type WithProperty<Type, Prop extends keyof Type> = {
[key in Prop]-? : Type[key]  // -?  - указывает, что это обязательное(не опцианальное поле)
} & { // тут добавим все остальные поля кроме описаных в Prop 
  [key in Exclude<keyof Type, Prop>] : Type[key]  // Exclude - выкусывает из одного множества другое
}

function func (options : optionsTypeWithAge) : number; // вариант с полем age
function func (options : WithProperty<optionsTypeWithAge, 'age'>) : number; // эквивалентно предыдущему ванианту

function func (options : optionsTypeWithName) : string; // вариант с полем name
function func (options : WithProperty<optionsTypeWithAge, 'name'>) : number; // эквивалентно предыдущему ванианту

function func (options : {}) : number[]; // вариант без полей

// для примера функция выводит или number, если определено поле ageб либо string если определено поле name, или массив number если ни то ни другое не определено
function func (options : optionsType) { // задаем СТРОГО в функциональном стиле
  if (options.age) {
    return options.age
  }

  if (options.name) {
    return options.name
  }

  return [1,2]
}

const options : optionsType = {
  age : 30,
  name : 'Max',
}

