'use client'

import React from "react";
import { useState, useCallback } from "react";

const useIsAuth = () => {
  const [isAuth, setIsAuth] = useState(true);

  // const switchAuth = useCallback(() => {
  //   setIsAuth((isAuth) => !isAuth)
  // }, [])

  const switchAuth = () => {
    setIsAuth((isAuth) => !isAuth)
  }

  return {isAuth, switchAuth}
}

function AuthComponent() {
  return (
    <div>Контент для авторизованных юзверов</div>
  )
}

function NoAuthComponent() {
  return (
    <div>Контент для не авторизованных юзверов</div>
  )
}

// тут есть проблема с тем что значение isAuth запечатывается для функции
const WithAuthorize = ({AuthComp, NoAuthComp}) => {
  return function WithAuthorizeComp() {
    const {isAuth} = useIsAuth();
    console.log(isAuth)

    return isAuth ? <AuthComp /> : <NoAuthComp /> 
}
}

const ComponentWithAuth = WithAuthorize({
  AuthComp: AuthComponent, 
  NoAuthComp: NoAuthComponent});

export default function Hoc() {
  const {isAuth, switchAuth} = useIsAuth();
  console.log(isAuth)

  return (
    <div> 
      <button onClick={() => switchAuth()}>{isAuth ? 'Разлогиниться' : 'Войти в систему'}</button>
      <ComponentWithAuth />
    </div>
  )
}