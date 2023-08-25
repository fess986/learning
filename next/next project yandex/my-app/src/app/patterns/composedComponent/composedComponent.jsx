"use client"

import React from 'react';
import { useState, useContext } from 'react';

// type Initial = {
//   initial: boolean;
// }

// так мы сначала реализовывали тоггл до создания компаунд-компонента
// function Toggle1({ initial }) {

//   let [isOn, setIsOn] = useState(initial);

//   return (
//     <>
//       <button onClick={() => setIsOn(!isOn)}>Toggle</button>
//       {isOn && <span>on</span>}
//       {!isOn && <span>off</span>}
//     </>
//   )
// }

 
const ToggleContext = React.createContext(false);

function ToggleCompaund( {children, initial} ) {
  const [isOn, setIsOn] = useState(initial);

  return (
    // для того чтобы передать дочерним элементам контекст оборачиваем в провайдер, в значение которого передадим объект с полями-значениями нашего стейта
    <ToggleContext.Provider value={ {isOn, setIsOn} }>{children}</ToggleContext.Provider>
  )
}

// специальная запись для связанных компаунд компонентов - то есть мы в функции ToggleCompaund создаем еще одну фукцию ToggleCompaund.on , в которой и создаем компонент. При этом не обязательно так делать, можно было бы любой jsx компонент создать
ToggleCompaund.on = function On() {
  const {isOn} = useContext(ToggleContext)

  if (!isOn) {
    return null
  }

  return (
    <span>on</span>
  )
}

ToggleCompaund.off = function Off() {
  const {isOn} = useContext(ToggleContext)

  if (isOn) {
    return null
  }

  return (
    <span>off</span>
  )
}

ToggleCompaund.button = function Button() {
  const {isOn, setIsOn} = useContext(ToggleContext)
  return (
    <button onClick={() => setIsOn(!isOn)}>Toggle</button>
  )
}

export function CompoundComponent() {
  return (
    <>
      <ToggleCompaund initial={false}>
        <>
          <ToggleCompaund.on />
          <ToggleCompaund.off />
          <ToggleCompaund.button />
        </>
      </ToggleCompaund>

    </>
  )
}