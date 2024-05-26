export default {}

// For given a tuple, you need create a generic Length, pick the length of the tuple

// For example:

type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type Length<T extends any[]> = T['length'] extends 0 ? 0 : T['length']

type teslaLength = Length<tesla>  // expected 4
type spaceXLength = Length<spaceX> // expected 5
type spaceXLength1 = Length<[]> // expected 5
