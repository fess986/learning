export default {}



const foo = (arg1: string, arg2: number): void => {}

type MyParameters<T extends Function> = T extends ((infer R : any) => void) ? 1 : 2

type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]


