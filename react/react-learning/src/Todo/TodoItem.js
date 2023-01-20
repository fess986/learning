// пункт списка
import React, { useContext } from "react";  // useContext - подключается через деструкторизацию. можно было его отдельно не выгружать и обращаться через React.useContext
import PropTypes from 'prop-types'
import Context1 from "../context";



const styles = {
  li: {
    display: 'flex',
    justifyContent: "space-between",
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid red',
    borderRadius: "px",
    marginBottom: ".5rem"

  },
  input: {
    marginRight: "1rem"
  }
}

function TodoItem({todo123, index, changing}) {  //можно передавать сразу названия ключей объекта  - деструкторизация
  console.log('айтем ререндерится', todo123)  // не срабатывает, если просто так переопределять объект. Обязательно нужен React.useState . Он заставляет перерисовывать(ререндерить) этот объект

  const { removeTodo5 } = useContext(Context1);  // читаем React.useContext

  console.log (`конетекст removeTodo1 : ${removeTodo5}`)


  let classes = ['hi'];

  if (todo123.completed) {
    classes.push('done ')
  }
  console.log(classes)

  return (
    <li style={styles.li}>
      <span className={classes.join(' ')}>  {/* так как мы передаем массив классов, а нужна строка, джойним его */}
        {/* здесь стили подключены через стиливой объект. Лучше, наверное это делать через классНейм */}
        <input type='checkbox' style={styles.input} checked={todo123.completed} onChange={() => {
          changing(todo123.id)
        }} />
        <strong>{index + 1}</strong>
        &nbsp;
        {todo123.title}
      </span>
      <button className="rm" onClick={() => removeTodo5(todo123.id)}>&times;</button>
    </li>
  )
}

TodoItem.propTypes = {
  todo123: PropTypes.object.isRequired,
  index: PropTypes.number,
  changing: PropTypes.func.isRequired
}

export default TodoItem;
