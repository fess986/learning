// Implement the type version of Array.unshift

type Unshift<arr extends any[], unshift> = [unshift, ...arr]

type Result777 = Unshift<[1, 2], 0> // [0, 1, 2,]