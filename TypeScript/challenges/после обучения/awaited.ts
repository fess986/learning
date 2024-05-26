export default {}

type ExampleType = Promise<number>

type MyAwaited<T extends Promise<any>> = T extends Promise<infer R1> ? R1 : never

type Result = MyAwaited<ExampleType> // string