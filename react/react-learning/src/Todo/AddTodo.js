// добавление пунктов задач
import React, { useState } from "react";
import PropTypes from 'prop-types'


// создаем ПОЛЬЗОВАТЕЛЬСКИЙ ХУК useInputValue
function useInputValue(defaultValue = '') {
  let [value1, setValue] = useState(defaultValue)

  return ({
    bind: {
      value: value1,
      onChange: event => setValue(event.target.value)
    },
    value: () => value1,
    clear: () => setValue('')
})
}

function AddTodo({onCreate1}) {
  const input = useInputValue();

  function submitHandler(event) {
    event.preventDefault();

    if (input.value().trim()) {
      onCreate1(input.value())
      input.clear()
    }

    // setValue(value1= '');
  }

  return (
    <form style={{ marginBottom: "1rem" }} onSubmit={submitHandler}>
      <input {...input.bind}></input>
      {/* спрэд ...input развернет объект в поля value и onChange. На практике в чистом js такая фишка не прокатывает */}
      <button type="submit"> Введите новую задачу </button>
    </form>
  );
}

// вариант без дополнительного хука useInputValue выглядит так:
// function AddTodo({onCreate1}) {

//   let [value1, setValue] = useState()

//   function submitHandler(event) {
//     event.preventDefault();

//     if (value1.trim()) {
//       onCreate1(value1)
//     }

//     setValue(value1 = '');
//   }

//   return (
//     <form style={{ marginBottom: "1rem" }} onSubmit={submitHandler}>
//       <input value={value1} onChange={event => setValue(event.target.value)}></input>
//       <button type="submit"> Введите новую задачу </button>
//     </form>
//   );
// }

AddTodo.propTypes = {
  onCreate1: PropTypes.func.isRequired
}

export default AddTodo;
