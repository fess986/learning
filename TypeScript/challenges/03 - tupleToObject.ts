const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const // замораживает массив и не дает его менять

const freezen = {
  freeze: 'on',
} as const;

freezen.freeze = 'ass'; // получаем ошибку перезаписи

// tuple.push('ass') // так как мы заморозили, нам говорят, что пуша нет у объекта

// type typeofTupple = typeof tuple
// type TupleToObject<T> = {
//   [S in keyof T] : S
// }

// type Test = (string | number)[]
// const test : Test = ['dhgdras','sdrhfrh', 5]

type typeofTupple = typeof tuple

type TupleToObject<T extends readonly (string)[]> = {
  [key in T[number]]: key;
};

type result = TupleToObject<typeof tuple> //