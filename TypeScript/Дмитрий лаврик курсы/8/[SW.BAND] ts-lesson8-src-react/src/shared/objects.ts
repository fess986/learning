import { FlattenKeys, GetByDotKey, StrObj } from "../types/utility";

export function getByDotKey<T extends StrObj, K extends FlattenKeys<T>>(
	obj: T, 
	schema: K
) : GetByDotKey<T, K>
{
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return schema.split('.').reduce((obj: any, key: string) => {
		if(!(key in obj)){
			throw new Error(`${schema} is wrong key for`);
		}

		return obj[key];
	}, obj);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function runFnWithTuple<T extends (...args: any) => unknown>(fn: T, tuple: any){
	return fn(...tuple) as ReturnType<T>;
}