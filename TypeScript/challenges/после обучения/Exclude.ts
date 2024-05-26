export default {}

// Implement the built-in Exclude<T, U>

//     Exclude from T those types that are assignable to U

// For example:

type MyExclude<T, K> = T extends K ? never : T

type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'