//создание списка задач
import React from "react";
import PropTypes from 'prop-types'  // проверка типов входящих данных
import TodoItem from "./TodoItem";

const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  }
}

function TodoList(props) {   //таким образом мы можем передавать объекты в функцию, обращаться к которым можно через их ключи
  console.log('лист ререндерится')
  return (
    <ul style={styles.ul}>

      {/* {console.log(props)} */}
      {props.todos.map((todo2, index) => {
        return <TodoItem todo123={todo2} key={todo2.id} index={index} changing={props.togling}/>
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  togling: PropTypes.func.isRequired
}

console.log(PropTypes); //список валидируемых типов данных

export default TodoList
