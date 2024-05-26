// для теста - копируем полностью в App.js

import React from 'react';
import './App.css';

function initStaseCalc() {
  console.log('I am working');
  return Math.trunc(Math.random() * 10)
}

function App() {

  //const [counter, setCounter] = React.useState(0);

  //const [counter, setCounter] = React.useState(initStaseCalc());

  const [counter, setCounter] = React.useState(() => initStaseCalc());  // если начальный стейт вычисляемый, то лучше(сильно) вызывать его через колбэк, как это сделано тут

  const [state, setState] = React.useState({
    'title' : "Мое название",
    'Id' : Date.now()
  })

  // console.log(state);
  // state.title = 'ass2'

  function add() {
    // setCounter(counter + 1)
    // setCounter(counter + 1)  // эта не сработает, так как ф-я работает асинхронно. Для норм работы нужно использовать коллбек, как описано ниже

    setCounter((prevCounter) => {  // вызов через предыдущее состояние, через колбэк, чтобы не было проблем с асинхронностью. В prevCounter по умолчанию кладется значение counter 
      return prevCounter = prevCounter + 1
    })

    setCounter(prev => prev + 1)  // анологично верхнему
  }

  function minus() {
    setCounter(counter - 1)
  }

  // function changeObject() {   // это  работает неправильно, переписывается сразу весь объект, так как у объекта нужно еще другие поля учесть 
  //   setState({'title': 'new'})   // title : new
  // }

  function changeObject() {   // выгружаем сначала предыдущее состояние и потом меняем 
    setState(prev => {
      return {
        ...prev,
        'title': 'new'
      }
    })   
  }

  return (
    <div>
      <h1>Счётчик через useState: {counter} </h1>
      <button className='btn btn--plus' onClick={add}>Добавить</button>
      <button className='btn btn--minus' onClick={minus}>Вычесть</button>

      <button className='btn btn--minus' onClick={changeObject}>Меняем титл у кнопки</button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
