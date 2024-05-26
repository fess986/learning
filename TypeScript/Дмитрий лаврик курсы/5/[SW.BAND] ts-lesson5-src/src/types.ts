export type StrObj = Record<string, unknown>

export type FlattenKeys<T extends StrObj, OnlyDeep = false , K = keyof T> = 
	K extends string 
		? T[K] extends StrObj
			? `${K}.${FlattenKeys<T[K], OnlyDeep>}` | ( OnlyDeep extends false ? K : never )
			: K
		: never

export type GetByDotKey<T extends StrObj, K extends string> = 
	K extends `${infer R1}.${infer R2}` 
		? T[R1] extends StrObj
			? GetByDotKey<T[R1], R2>
			: never
		: K extends keyof T
			? T[K]
			: never