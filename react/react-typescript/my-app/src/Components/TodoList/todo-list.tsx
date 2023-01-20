import React from "react";
import { ITodo } from "../../types/interfaces";

type ListTodoProps = {
    todos: ITodo[],
    completeTodo: (id: number) => void, // если свойство не обязательно, то ставим "?", тогда TS не будет на нас ругаться
    removeTodo: (id: number) => void,
}

export const ListTodo = ({todos, completeTodo, removeTodo}: ListTodoProps) => {

    if (todos.length === 0) {
        return (
            <p>Пока дел нет!</p>
        )
    }

    const removeTodoHandler = (id: number, evt: React.MouseEvent) => {
        evt.preventDefault();

        removeTodo(id)
    }

    return (
        <ul>
            {todos.map((todo) => {
                const todoClases: string[] = ['todo'];
                if (todo.completed) {
                    todoClases.push('completed')
                }

                return (
                    <li className={todoClases.join(' ')} key={todo.id} >
                        <label>
                            <input type="checkbox" checked={todo.completed} onChange={() => completeTodo(todo.id)} />  {/* вызов через коллбэк,
                            для того чтобы функция не вызвалась сразу во время 
                            компиляции кода*/}
                            <input type="checkbox" checked={todo.completed} onChange={() => completeTodo(todo.id)} /> 
                            <span>{todo.title}</span>

                            {/* <i className="material-icons red-text" onClick={removeTodo.bind(null, todo.id)}>delete</i>  вызов через бинд 
                            таким образом мы создаем новую функцию с тем же контекстом
                            но не вызываем ее сразу*/}

                            <i className="material-icons red-text" onClick={evt => removeTodoHandler(todo.id, evt)}>delete</i> {/* проброска эвента и свойств в хендлер порядок evt не важен */}
                        </label>
                    </li>
                )
            })}
            
        </ul>
    )
}