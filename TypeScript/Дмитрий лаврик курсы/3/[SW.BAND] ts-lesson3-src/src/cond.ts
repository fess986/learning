import { TClientUser, TUser } from "./hw2";

export default {};

type some = {} extends boolean ? 1 : 2;

type Extract1<T, U> = T extends U ? T : never

type userTypes = 'client' | 'manager' | 'admin';
type cl = 'client';

// 'client' extends 'client' | 'manager' | 'admin'
type a = cl extends userTypes ? cl : never

type b = TUser extends { type: 'client' }  ? { type: 'client' } : never


type c = Extract<TUser, { type: 'client' }>
/* 
Extract<TClientUser, { type: 'client' }> | 
Extract<TManagerUser, { type: 'client' }> | 
Extract<TAdminUser, { type: 'client' }>
=
TClientUser | never | never = TClientUser */

type d = TUser extends { type: 'client' } ? TUser : never




type first = 'a' | 'b' | 'c'; 
type second = 'b' | 'c' | 'd';

type r1 = first extends second ? 1 : 2  // 2 так как идёт проверка толпа на толпу, сравниваются сразу все значения
type r2 = second extends first ? 1 : 2  // 2

type In<T, U> = T extends U ? T : 2  

/* In<T, U> -> In<'a' | 'b' | 'c', 'b' | 'c' | 'd'>
	=
		In<'a', 'b'> | 
		In<'b', 'b'> | 
		In<'c', 'b'> | 
		In<'a', 'c'> | 
		In<'b', 'c'> | 
		In<'c', 'c'>
		... */

type in1 = In<first, second>
type in2 = In<second, first>