// TASK KUI 6 . ПОИСК БУКВЫ В СЛОВЕ И СОРТИРОВКА ПО ЭТОЙ БУКВЕ
function order(words) {
  let arrWords = words.split(" ");
  arrWords.sort((a, b) => a.match(/\d/)[0] - b.match(/\d/)[0]);
  wordsSorted = arrWords.join(" ");
  return wordsSorted;
}
console.log(order(""));
//   "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""
