
type TUser = {
	id: number,
	email: string
}

type TAdminUser = TUser & {
	role: string
}

interface User{
	id: number,
	email: string
}

interface AdminUser extends User{
	role: string
}

/* class User implements TAdminUser{

} */

type A = string | number;

/* type TAdminUser{
	some: string
} */
/*
interface AdminUser{
	some: string
}

 const a: AdminUser = {
	id: 1,
	email: 'a',
	role: 'admin',
} */
/* 
interface Window{
	a: number[]
}

window.a */

