import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";  // нужен для того чтобы наше приложение имело доступ к стору
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import { rootReduser } from "./redux/rootReduser";

// видимо при создании стора через createStore, обязательно нужно использовать строку window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), иначе девтулзы в браузере не активируются
const store = createStore(rootReduser, compose(applyMiddleware(
  thunk
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
console.log(store)

// создаем допольнительную обертку для нашего App, подключенного к редаксу
const NewApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NewApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
