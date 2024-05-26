import React, {useState, useEffect} from 'react';
import Navbar from './Components/Navbar/navbar'
import FormTodo from './Components/FormTODO/form-todo'
import {ITodo} from './types/interfaces'
import { ListTodo } from './Components/TodoList/todo-list';

// declare var confirm: (quastion: string) => boolean;  // declare - помогает объявить переменную из внешнего окружения, которого нет в данном модуле. Например тут мы декларируем confirm, которого нет в JS, но есть в браузере, те в глобальном объекте window

function App () : JSX.Element {
  
  const [todos, setTodos] = useState<ITodo[]>([]);

  // почему то localStorage обнуляется при перезагрузке. Да и хер с ним)
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]; // так как сторэдж хранит только строки, а у нас имеется массив объектов, то мы должны распарсить всё это дело из формата JSON при помощи JSON.parse .  Но этот метод парсит только стринги, а у нас может быть пустая строка, именно поэтому мы даем ему выбор что именно распарсить  || '[]')

    setTodos(savedTodos)
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos)); // так как можно писать только строки в сторэдж, превратим массив объектов в JSON-строку

  }, [todos]);


  const addTodo = (title : string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    }
    setTodos(prev => [newTodo, ...prev])
  }

  // хз почему не получается через предыдущее состояние. У минина так же написано и у него работает. В итоге переписываем через прямое вмешательство в todos
  // const completeTodo = (id: number): void => {
  //   console.log(id);
    
  //   setTodos(prev => prev.map(todo => {
  //     // debugger;
  //     if (todo.id === id) {
  //       todo.completed = !todo.completed;
  //       // console.log(todo.completed)
  //     }

  //     return todo
  //   }))
  //   console.log(todos)

  // }

  const completeTodo = (id: number): void => {
    console.log(id);
    
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }))
  }

  const removeTodo = (id: number): void => {
    // const shouldRemove = confirm('are u shure?'); // декларируем функцию confirm в начале модуля, после этого можем её использовать

    const shouldRemove = window.confirm('are u shure?');  // тут мы используем вместо confirm - window.confirm , так как у нас нет по умолчанию такого метода. Но при этом мы получаем баг со всплытием события, так как отменяется удаление, далее событие ловит обработчик смены состояния тудушки. Нам нужно отменить всплытие, например превентдефолтом
    if (shouldRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id));
    }
  }

  return (
    <>
      <Navbar />
      <h1>
        Hi!123
      </h1>
      <div className='container'>
        <FormTodo onAdd={addTodo}/>
        <ListTodo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}/>

      </div>
    </>
    
  );
}

export default App;
