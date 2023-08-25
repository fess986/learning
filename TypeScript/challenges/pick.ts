type Todo = {
  title: string
  description: string
  completed: boolean
}

// 
type TodoPreview = Pick<Todo, 'title' & 'completed'> // пик - берет из исходного интерфейса/типа Todo - поля 'title' ИЛИ 'completed'

const todo: TodoPreview = {
    title: 'Clean room',
    // completed: false, - не обязателен
}

type TodoPreview2 = Pick<Todo, 'title' | 'completed'> // пик - берет из исходного интерфейса/типа Todo - поля 'title' ИЛИ 'completed' так что получается & = |

const todo2: TodoPreview = {
   // title: 'Clean room', 
    completed: false,
}

// Примеры реализации собственного пика. Реализация из описания
type MyPick<T extends object, K extends keyof T> = { // K наследуется от ключей T
  [S in K]: T[S];  // [S in K] - означает что КЛЮЧ S - должно быть в множестве K, а его типом будет равен типу исходного объекта T с ключом S 
}

type TodoPreview3 = MyPick<Todo, 'title' | 'completed'> 

const todo3: TodoPreview = {
   // title: 'Clean room', 
    completed: false,
}


// мемная реализация
type MyPick2<T, K extends keyof T> = Pick<T, K>
