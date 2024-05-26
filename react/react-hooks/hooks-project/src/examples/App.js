import React, { useEffect } from "react";

function useLogger (value) {
  useEffect(() => {
    console.log('value =', value)
  }, [value])
}

function useInput (initialValue) {
  const [value, setValue] = React.useState(initialValue);

  function onChange(event) {
    setValue(() => event.target.value)
  }

  function onClear () {
    setValue(prev => prev = '')
    console.log('clear is working')
  }

  return {
    bind1: {value, onChange},   // прописываем параметры для вливки в инпут
    value,   //прописываем для того чтобы можно было отдельно к значению обращаться
    onClear
  }
}

function App() {

  const [name, setName] = React.useState('');
  const [lastName, setLastName] = React.useState('');

  const input1 = useInput('first input');
  const input2 = useInput('second input');

  const handler = (event) => {
    setName(() => event.target.value)
  }

  const lastHandler = (event) => {
    setLastName(() => event.target.value)
  }

  useLogger(name)

  return (   // Оборачиваем место, где его будем передавать в AlertContent.Provider
      <div className={'container pt-3'}>
        <input type="text" placeholder="name" onChange={handler}></input>
        <input type="text" placeholder="last name" onChange={lastHandler}></input>
        {/* используем инпут из пользовательского хука */}
        <input type="text" placeholder="input1 name" value={input1.value} onChange={input1.bind1.onChange}></input>  
        
        {/* так как поля объекта совпадают с входными полями инпута(который тоже по сути является объектом), то мы можем воспользоваться записью {...input2} */}
        <input type="text" {...input2.bind1}></input>  

        <button type='button' onClick={() => input2.onClear()}>очистка 4-го инпута</button>

        <h1>{name} {lastName}  {input1.bind1.value} {input2.value}</h1>
        
      </div>
    
  );
}

export default App;
