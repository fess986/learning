// работа с классическими модалками через классы реакта
import React from "react";
import "./Modal.css";

export default class Modal extends React.Component {
  //объявляем классический стейт в реакте. Название обязательно должно быть таким: state
  state = {
    isOpen: false
  }

  render() {
    return (
      //чтобы реакт не добавлял корневого элемента, мы прописываем реакт фрагмент
      <React.Fragment>
        <button onClick = {() => this.setState({isOpen: true})}  >Open Modal</button>
        {/* классическая смена стейта производится через this.setState */}

        { this.state.isOpen && (
          <div className="modal">
          <div className="modal-body">
            <h1>Modal title</h1>
            <p>My class Modal</p>
            <button onClick = {() => this.setState({isOpen: false})}>Close Modal</button>
          </div>
        </div> )
        }

      </React.Fragment>
    );
  }
}
