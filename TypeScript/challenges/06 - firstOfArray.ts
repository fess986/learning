type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]
type arr3 = []
type arr4 = [1]


type First<Arr extends any[]> =  Arr[0] // мой вариант. плох тем, что нет проверки на пустой массив
// type First<T extends any[]> = T extends [] ? never : T[0]; // проверка пустого массива

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3
type head3 = First<arr3> // так как нет проверки на пустой массив - в моём варианте будет undefined вместо never

// const arr1 : arr1 = ['a', 'b', 'c']

// использование infer в конструкции условия
type First2<T extends any[]> = T extends [infer P, ...any[]] ? P : never
type head11 = First2<arr1> // a

type Second<T extends any[]> = T extends [any, infer P, ...any[]] ? P : never
type head21 = Second<arr1> // b
type head33 = Second<arr3> // never
type head41 = Second<arr4> // never, так как нет 2 значения



type First123<T extends any[]> = T extends [infer A, ...infer rest] ? A : never // еще одна интересная реализация с использованием конструкции ...infer rest вместо ...any[]
type head2112 = First123<arr1>

