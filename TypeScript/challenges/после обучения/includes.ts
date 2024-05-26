export default {}

type Includes<T extends any[], U> = Extract<T[number], U> extends  never ? false : true

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`

type isPillarMen1 = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Esidisi'> // expected to be `false`

type ArrToUnion<T extends any[]> = Extract<T[number], T[number]>

type Ass  = Includes123<[1,2,3]>