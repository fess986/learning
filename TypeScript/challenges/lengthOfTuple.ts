type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']
type zero = []

type Length<tupple extends any[]> = tupple extends infer R ? tupple['length'] : never // мое решение. Проверяем свойство length

// type Length<T extends any> = T extends { length : infer R } ? R : never;
// type Length<T extends readonly any[]> = T['length'] // обращение как именно последовательности

type teslaLength = Length<tesla>  // expected 4
type spaceXLength = Length<spaceX> // expected 5
type zeroLength = Length<zero> // expected 5