// Implement the built-in Pick<T, K> generic without using it.

// Constructs a type by picking the set of properties K from T

// For example:
export default {}

interface Todo {
  title: string
  description: string
  completed: boolean
}

type MyPick<ObjType extends object, Union> = {
  [K in keyof ObjType as K extends Union ? K : never] : ObjType[K]
}


type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}