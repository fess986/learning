import React, {useState, useMemo, useEffect, useCallback} from "react";
import ItemList from "./itemsList";
// import "./App.css";



function App() {

  const [count, setCount] = useState(1);
  const [colored, setColored] = useState(false)  
  
  const styles = {
    color: colored ? 'red' : 'green'
  }

  const generateItemsFromIPI = useCallback((indexNumber) => {  // позволяет как и юзмемо экранировать функцию от рендеринга. функция будет запускаться только когда параметр в [count]  будет изменен. Возвращается именно ф-я, а не только ее результат, т.е. мы можем в нее передавать аргументы
    return new Array(count).fill('').map((_, i) => `Элемент ${i + indexNumber}`)
  }, [count])

  console.log(generateItemsFromIPI())

  return (
    <div>
      <h1 style={styles}>Счётчик через useState: {count} </h1>
      <button className='btn' onClick={() => setCount(prev => prev + 1)}>Добавить</button>
      <button className='btn' onClick={() => setColored(prev => !prev)}>Изменить</button>
      {/* <button className='btn' onClick={() => }>Добавить элемент</button> */}
      <ItemList getItems={generateItemsFromIPI}></ItemList>
    </div>
  );
}

export default App;




