// Implement the JavaScript Array.concat function in the type system. A type takes the two arguments. The output should be a new array that includes inputs in ltr order

type Concat<Arr1 extends any[], Arr2  extends any[]> = [...Arr1, ...Arr2] // спред тоже работае в этой теме!

type ResultConc = Concat<[1], [2]> // expected to be [1, 2]