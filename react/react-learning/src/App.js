// import logo from './logo.svg';
// import './App.css';
import React, { useEffect } from "react";
import TodoList from "./Todo/TodoList";
import Context1 from "./context";
// import AddTodo from "./Todo/AddTodo";  -  убираем для теста лейзилоадера
import Loader from "./Loader";
import Modal from "./Modal/Modal"; //модальный класс

// const AddTodo = React.lazy(() => import("./Todo/AddTodo"))  // так делаем по умолчанию
//лези-лоадим AddTodo
const AddTodo = React.lazy(() => new Promise(resolve => {
  setTimeout(() => {
    resolve(import("./Todo/AddTodo"))
  }, 3000);
}))

function App() {
  // вариант с собственным списком
  // const [todos1, setTodos] = React.useState([
  //   { id: 1, completed: false, title: "купить вибратор" },
  //   { id: 2, completed: true, title: "купить вазилин" },
  //   { id: 3, completed: false, title: "купить расширитель" },
  // ]);

  // вариант со списком с сервера
  const [todos1, setTodos] = React.useState([]);  // стейт состояния задач
  const [loading, setLoading] = React.useState(true);  //стейт состояния загрузки

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((todos1) => {
        setTimeout(() => {
          setTodos(todos1);
          setLoading(false);
        }, 2000);
      });
  }, []);

  // смена состояния задачи
  function toggleTodo(id) {
    // console.log(`id is`, id);
    // console.log(`массив`, todos1);
    setTodos(
      todos1.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  // так писали до хуков. Реакт так не ререндерит объекты
  // let todos1 = [
  //   {id: 1, completed: false, title: 'купить вибратор'},
  //   {id: 2, completed: false, title: 'купить вазилин'},
  //   {id: 3, completed: false, title: 'купить расширитель'},
  // ]

  // function toggleTodo(id) {
  //   console.log(`id is`, id);
  //   console.log(`массив`, todos1);
  //   todos1 = todos1.map(todo => {
  //     if (todo.id === id) {
  //       todo.completed = !todo.completed;
  //     }
  //     return todo;
  //   })
  //   }

  // удаление задач
  function removeTodo2(id) {
    console.log(`удаляем элемент под id = `, id);
    setTodos(todos1.filter((item) => item.id !== id));
  }

  function addTodo2(title) {
    setTodos(
      todos1.concat({
        title: title,
        id: Date.now(),  // по какой то причине для каждой новой задачи дает аёди по порядку. Причина стала ясна. Выдается большое число. Что то вроде 1669452108950
        completed: false,
      })
    );
  }

  return (
    // Context1.Provider - нужен для работы с контекстом
    <Context1.Provider value={{ removeTodo5: removeTodo2 }}>
      <div className="wrapper">
        <h1>React tutorial</h1>
        {/* подключаем классическую модалку из классов */}
        <Modal></Modal>

        {/* используем React.Suspense для лези-лоадинга. AddTodo инпортирован из реакт.лези */}
        <React.Suspense fallback={<p>loading</p>}>
          <AddTodo onCreate1={addTodo2}></AddTodo>
        </React.Suspense>

        {loading && <Loader></Loader>}

        {/* проверка есть ли задачи через длинну массива */}
        {todos1.length ? (
          <TodoList todos={todos1} togling={toggleTodo}></TodoList>
        ) : (

          loading ? null : <p>Задач на сегодня больше нет!</p>

        )}
      </div>
    </Context1.Provider>

    // код по умолчанию
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
