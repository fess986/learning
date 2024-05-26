import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [type, setType] = useState("users");
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({
    x : 0, y : 0
  })

  //  useEffect(() => {  // запускается только при смене состояния type, если жмем 2 раза на 1 кнопку, то не вызывается
  //   console.log("render")
  //  })

  const mouseMoveFunc = (event) => {
    setPos(() => {
        return {
          x: event.clientX,
          y: event.clientY
        }
      })
  }

  useEffect(() => {
    // запускается при изменении состояния type
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((data) => setData(() => data))
      console.log('123');

      return () => {   // не вызывается при инициализации, но запускается при изменении состояния
        console.log('запуск при изменении')
      }
  }, [type]);

  useEffect(() => {   //если параметры пустые то запускается только при рендеринге
    console.log("mount")
    window.addEventListener('mousemove', mouseMoveFunc)

    return () => {   // запустится после закрытия компоненты
      window.removeEventListener('mousemove', mouseMoveFunc)
    }
  }, [])

  return (
    <div>
      <h1>Состояние: {type}</h1>
      <button onClick={() => setType("users")}>Пользователи</button>
      <button onClick={() => setType("todos")}>todos</button>
      <button onClick={() => setType("posts")}>Посты</button>

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  );
}

export default App;
