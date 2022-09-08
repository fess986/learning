const book = `LiTe lite bare Bare`;
const test = [`Bare`, `BARE`, `Bear`, `bear`, `lite`, `Lite`, `LiTe`, `leti`, `leet`, `leto`];
output = [];
let testingElement;
let regexp;
let regexpLayout;


for (let i = 0; i < test.length; i++) {
  // первый сорт самый простой просто сравниваем строки
  regexp = new RegExp(test[i]);
  testingElement = book.match(regexp);
  if (testingElement) {
    output.push(testingElement[0]);
    continue;
  }

  // второй сорт тоже очень прост, просто отключаем проверку регистра
  regexp = new RegExp(test[i], `gi`);
  testingElement = book.match(regexp);
  if (testingElement) {
    output.push(testingElement[0]);
    continue
  }

  // в 3 варианте мы клеим шаблон для нашего регулярного выражения. В случае согласной - просто добавляем ее, в случае с гласной - клеим в шаблон выбор из различных гласных букв [aeiou]
  regexp = '';
  regexpLayout = '';
  for (let j = 0; j < test[i].length; j++) {
    if (['a','e','i','o','u','A','E','I','O','U'].includes(test[i][j])) {
      regexpLayout = regexpLayout + `[aeiou]`;
    } else {
      regexpLayout = regexpLayout + test[i][j];
    }
  }
  regexp = new RegExp(regexpLayout, `gi`);
  testingElement = book.match(regexp);
  if (testingElement) {
    output.push(testingElement[0]);
    continue
  } else {
    output.push(null)
  }
}

console.log(output)
