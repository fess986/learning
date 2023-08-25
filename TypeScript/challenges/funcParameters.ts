const foo = (arg1: string, arg2: number): void => {}

// мой вариант для двух параметров
type MyParameters<Func extends (arg1: any, arg2: any) => void> = Func extends (arg1: infer First, arg2: infer Second) => void
? [{arg1: First},{arg2: Second} ]
: never 

// более универсальный вариант
type MyParameters1<T extends (...args: any[]) => unknown> = T extends (...args: infer R) => unknown ? R : never // получается ...args - разворачивает массив из аргументов функции.

type FunctionParamsType = MyParameters1<typeof foo> // [arg1: string, arg2: number]