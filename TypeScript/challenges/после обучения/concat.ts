export default {}

type Concat<T extends any[], U extends any[]> = T extends [infer R1] 
  ? 
    U extends [infer R2] 
    ? [R1, R2] 
    : never
  :
    never

type Result = Concat<[1], [2]> // expected to be [1, 2]