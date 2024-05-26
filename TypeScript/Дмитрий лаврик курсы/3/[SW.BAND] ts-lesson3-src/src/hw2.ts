export default {};

export type TUserBase = {
	id: number,
	login: string,
}

export type TAdminUser = TUserBase & {
	type: 'admin',
	accessLevel: number
}

export type TManagerUser = TUserBase & {
	type: 'manager',
	accessLevel: number,
	roles: string[]
}

export type TClientUser = TUserBase & {
	type: 'client'
}

export type TUser = TAdminUser | TManagerUser | TClientUser;


function loadUsers(): TUser[]{
	return [
		{ type: 'admin', id: 1, login: 'admin', accessLevel: 5 },
		{ type: 'client', id: 2, login: 'cl1' },
		{ type: 'client', id: 3, login: 'cl2' },
		{ type: 'manager', id: 4, login: 'cl2', accessLevel: 1, roles: ['editor'] },
		{ type: 'manager', id: 5, login: 'cl2', accessLevel: 2, roles: ['editor', 'moderator'] }
	]
}


type Component = () => string
 
type RouteRecordBase = {
	path: string
}

type RouteRecordComponent = RouteRecordBase & {
	i: 'component',
	component: () => string,
	children?: RouteRecord[]
}

type RouteRecordRedirect = RouteRecordBase & {
	i: 'redirect',
	redirect: string
}

type RouteRecord = RouteRecordComponent | RouteRecordRedirect;

const routes: RouteRecord[] = [
	{
		i: 'component',
		path: '/',
		component: () => 'home page'
	},
	{
		i: 'redirect',
		path: '/old',
		redirect: '/',
		/* component: () => 'home old' */
	},
	{
		i: 'redirect',
		path: '/products',
		redirect: '/catalog',
		/* children: [
			{
				path: '/',
				component: () => '1'
			}
		] */
	}
];

let users = loadUsers();


/* function makeFilter<T extends object, K extends keyof T, V extends T[K]>(prop: K, value: V){
	return (u: TUser): u is Extract<TUser, { type: T }> => u.type === expectedType;
} */


function makeFilter<Obj extends object, Key extends keyof Obj, Val extends Obj[Key]>(prop: Key, value: Val){
	return (item: Obj): item is Extract<Obj, { [K in Key]: Val }> => item[prop] === value;
}

/* let Key = 'a'
{ [Key]: 1 } */
// { Key: 1 }
// { a: 1 }

//: item is Extract<TUser, { type: T }>

/*makeFilter<TUser, 'type', 'client'>('type', 'client')
makeFilter<RouteRecord, 'i', 'component'>('i', 'component')
 routes.forEach(makeFilter())
 */

const USER_TYPES = {
	client: 'client',
	maganer: 'maganer',
	admin: 'admin'
} as const;

/* const enum USER_TYPES{
	client = 'client',
	maganer = 'maganer',
	admin = 'admin'
} */

const cl = users.filter(makeFilter('type', USER_TYPES.client));
const cmp = routes.filter(makeFilter('i', 'component' as const));
const r = routes.filter(makeFilter('i', 'redirect' as const));

console.log(cl);
console.log(cmp);
console.log(r);

/* const a = users.filter(userFilter('manager')).map(u => u.roles);
console.log(a);

function userFilter<T extends TUser['type']>(expectedType: T){
	return (u: TUser): u is Extract<TUser, { type: T }> => u.type === expectedType;
}

const b = 5;

type NZ = {
	a: typeof b
}

userFilter('admin')
userFilter('client')

const some: ReturnType<typeof loadUsers> | null = null

function makeFilter<T extends object, K extends keyof T, V extends T[K]>(prop: K, value: V){
	
}

makeFilter<TUser, 'type', 'admin'>('type', 'admin');


type TCat = {
	voice: 'myo',
	name: 'some'
}

type TDog = {
	voice: 'gav',
	name: '1'
}

type TAnimal = TCat | TDog;

makeFilter<TAnimal, 'voice', 'myo'>('voice', 'myo'); */

/* type n1 = 'a' | 'b' | 'd';
type n2 = 'b' | 'c';

type n3 = Extract<n1, n2>

type nz = Extract<TUser, { type: 'admin' }>

TUserManager extends { type: 'admin' }
TUClientManager extends { type: 'admin' }
TUAdminManager extends { type: 'admin' } */