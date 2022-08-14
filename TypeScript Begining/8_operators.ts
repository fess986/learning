interface Person {
    name: string;
    age: number;
}

type PersonKeys = keyof Person // 'name' | 'age'

let pers: PersonKeys = 'name';
pers = 'age';
// pers = 'age2'; // ошибка, так как тут нет значений ключей Person

// Exclude / Pick
type User = {
    id: number;
    name: string;
    email: string;
    create: Date;
}

type NoIdnoCreate = Exclude<keyof User, 'id' | 'create'>  // все ключи User, кроме 'id' | 'create'
type NameAndEmail = Pick<User, 'name' | 'email'> // выбранные ключи 'name' и 'email' из User

let u1: NoIdnoCreate = 'name';
u1 = 'email';

// let u2: NameAndEmail = 'name';
// u2 = 'email';