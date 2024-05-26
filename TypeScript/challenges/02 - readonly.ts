// Readonly - запрещает менять поля объекта

//////////////// пример использования
interface Todo222 {
  title: string
  description: string
}

const todo222: Readonly<Todo222> = {
  title: "Hey",
  description: "foobar"
}

todo222.title = "Hello" // Error: cannot reassign a readonly property
todo222.description = "barFoo" // Error: cannot reassign a readonly property


//////////////// реализация

// просто дублирование параметров интерфейса Todo222
interface Todo333 {
  title: string
  description: string
}

type MyReadonly<T extends object> = {  // в принципе не обязательно extends object делать, так как примитивы не используем, но лучше прописать, чтобы не получить бяку
  readonly [S in keyof T] : T[S]
}

const myTry : MyReadonly<Todo333> = {
  title: 'ghjftgh',
  description: 'asdhf',
}

// с примитивами не работает
// let changedString : MyReadonly<string>= '123'; // если уберем проверку extends object, то тип присваивается без ошибок
// changedString = '321'; // отлично меняется
