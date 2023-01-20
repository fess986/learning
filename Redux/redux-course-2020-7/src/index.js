import './styles.css';
// import createStore from './createStore'; // импортируем написанный собственными руками стор
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';  // позваляет в экшены добавлять функции, а так же работать с асинхронностью

import { increment, decrement, asyncIncrement, changeTheme } from './redux/actions';  

import { rootReducer } from './redux/rootReduser';

const counter = document.querySelector('#counter');
const add = document.querySelector('#add');
const sub = document.querySelector('#sub');
const async = document.querySelector('#async');
const theme = document.querySelector('#theme');

// собственный мидлвеир. Череда возвращенных функций, реализующих замыкание. В итоге мы просто поменяем его на уже написанный
function logger1(state1) {  // state1 - изначально наш стор. Назвать можно как угодно
    return function(next1) {  // название функции, которая вызовет экшн
        return function(action1) {   // вызываемый экшн - объект действия
            console.log('Стейт предыдущий', state1.getState());
            console.log('Некст', next1);
            console.log('Экшен', action1);
            const newState = next1(action1)  // тут не совсем правильно сохраняется стейт, так что лучше пользоваться готовыми логгерами
            console.log('Стейт текущий', newState);
            return newState;  // вызывается предыдущее значение стейта
        }
    }
}

const store = createStore(rootReducer,
     /* 0,  начальное состояние убираем, если используем комбайн редьюсеров*/
     applyMiddleware(thunk, logger));

console.log(store.getState())

// const render = () => {
    
// }

add.addEventListener('click', () => {
    store.dispatch(increment());
})

sub.addEventListener('click', () => {
    store.dispatch(decrement());
})

async.addEventListener('click', () => {
    store.dispatch(asyncIncrement());
})

theme.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('light')
    ? 'dark'
    : 'light'

    store.dispatch(changeTheme(newTheme));

    // document.body.classList.toggle('dark')
    // render();
})

store.subscribe(() => {
    counter.textContent = store.getState().counter;  // при изменении стора меняем поле counter. В комбайн редьюсере надо обратиться к полю counter

    document.body.className = store.getState().theme.value;

    [add, sub, async].forEach((btn) => {  // собираем сразу в массив все кнопки, которые хотим задизеблить
        btn.disabled = store.getState().theme.disabled;
    })

    // console.log('store--------', store.getState().theme.disabled)
    // console.log(add.disabled)
})

// store.dispatch('левый экшн'); // запускаем левый экшн для того чтобы просто вернулся стейт и инициализировался - работает только с нашей версией стора, а в библиотечном варианте выдает ошибку

    // render();