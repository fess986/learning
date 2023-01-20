// работает с переменными, сохраняет их значение/состояние, но при этом не вызывают ререндер. Так же может хранить прошлюе состояния и можно делать непосредственные ссылки на ДОМ-объект
import React, { useState, useEffect, useRef } from "react";
import "./App.css";

// let renderCount = 1;  // если используем переменную для счёта, то нужно ее вынести за пределы функции App

function App() {

  const renderCount = useRef(1); // переменная, не вызывающая ререндеринг. При этом она представляет из себя объект, у которого есть св-во current, которое и хранит значеник
  const inputRef = useRef(null)  // это будет указателем на объект инпут. Обязательно указываем null в свойствах. Т.е. в (inputRef.current будет храниться ДОМ-элемент эл-та, на который мы поставим указатель ref={inputRef}. Таким образом мы сможем потом управлять этим элементом напрямую, например тут мы ставим фокус
  const prevValue = useRef('') // предыдущее значение стейта value

  const [value, setValue] = useState('hi');  //

  useEffect(() => {
    // console.log('run',  renderCount.current);
    renderCount.current++
    console.log(inputRef.current);
  })

  useEffect(() => {
    prevValue.current = value;  // сохраняем предыдущее значение value не вызывая ререндеринга
  }, [value])



  const focus = () => {  // похоже только так мы можем установить фокус на эл-те дом дерева
    inputRef.current.focus()
  }
  
  return (
    <div>
      <h1>Количество рендинга страницы: { renderCount.current}</h1>
      <h1>Предыдущее значение текста: { prevValue.current}</h1>
      <input ref={inputRef} type='text' onChange={event => {  // привязываем этот инпут к inputRef
        console.log(event);
        setValue(() => event.target.value)}} value={value} ></input>
      <button onClick={focus}>Фокус</button>

    </div>
  );
}

export default App;
