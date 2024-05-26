type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']
type zero = []

// моё решение
type Length<T extends any[]> = T['length'] extends 0 ? 0 : T['length']



type teslaLength = Length<tesla>  // expected 4
type spaceXLength = Length<spaceX> // expected 5
type zeroLength = Length<zero> // expected 5

// решение из интернетов
// type Length<T extends any> = T extends { length : infer R } ? R : never;