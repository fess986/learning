'use client'
import React, { useCallback, useContext, useState } from "react"

// если в провайдер передается объект с несколькими полями, то иногда есть смысл разделить их провайдеры и обернуть контекст в оба, для того чтобы не было лишних перерендеров у компонентов, которые не зависят от всех значений контекста.

const ThemeContext = React.createContext('light')
const ThemeSwitchContext = React.createContext(() => {}) // указываем что создается именно функция, но это не обязательно

const useTheme = () => {
  return useContext(ThemeContext)
}

const useSwitchTheme = () => {
  return useContext(ThemeSwitchContext)
}


const Header = () => {
  const {switchTheme} = useSwitchTheme();

  return (
    <>
      <button onClick={switchTheme}>Switch</button>
    </>
  )
}

const Content = () => {
  const {theme} = useTheme();
  return <div>{theme}</div>
}

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState('light')

  const switchTheme = useCallback(() => {
    setTheme(state => state === 'light' ? 'dark' : 'light')
  }, [])

  return (
    <ThemeContext.Provider value={ {theme} }>
      <ThemeSwitchContext.Provider value = { {switchTheme} }>
        {children}
      </ThemeSwitchContext.Provider>
    </ThemeContext.Provider>
  )
}

export default function ContextPage() {

  return (
    <ThemeProvider>
      <Header />
      <Content />
    </ThemeProvider>
      
  )
}