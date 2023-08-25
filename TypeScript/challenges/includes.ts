// Implement the JavaScript Array.includes function in the type system. A type takes the two arguments. The output should be a boolean true or false.

/////////// тут вообще нихера не понятно но очень интересно))
// Maps the array from { [index]: [itemValue] } to { [itemValue]: true } and returns whether the expected item value, U, is true. This only allows U, to be a PropertyKey, so it won't pass all test cases.

// type Includes<T extends readonly any[], U> = {
//   [P in T[number]]: true
// }[U] extends true ? true : false;

////////////// интересное рекурсивное решение. 
// type Includes<T extends readonly unknown[], U> =
//     T extends readonly [infer First, ...infer Rest] // тут мы описываем выход из рекурсии в случае если в массиве меньше 2 элементов
//       ? Exclude<First, U> extends never // интересная проверка через Exclude, так как он вернет never в случае если U входит в множество First
//         ? true
//         : Includes<Rest, U> // если не входит, мы запускаем рекурсивно без первого элемента
//       : false


////////////// похожий на предыдущий вариант, только реализация проверки отличается
      type Includes<T extends readonly any[], U> = T extends [infer L, ...infer R]
      // ? [U, L] extends [L, U] // странная проверка
      ? L extends U // вроде бы и так работает
        ? true
        : Includes<R, U>
      : false

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
type isPillarMen2 = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana', 'Dio'], 'Dio'> // expected to be `true`
type isPillarMen3 = Includes<[1,2,3,4], 4> // expected to be `true`
type isPillarMen4 = Includes<[1,2,3], 4> // expected to be `false`
