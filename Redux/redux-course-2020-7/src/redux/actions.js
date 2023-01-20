// создаем в функциях объекты экшенов

import { INCREMENT, DECREMENT, CHANGE_THEME, ENABLE_BUTTONS, DISABLE_BUTTONS} from "./types"

export function increment() {
    return {
        type : INCREMENT
    }
}

export function decrement() {
    return {
        type : DECREMENT
    }
}

function enableButtons() {
    return {
        type : ENABLE_BUTTONS
    }
}

function disableButtons() {
    return {
        type : DISABLE_BUTTONS
    }
}

export function changeTheme(newTheme) {
    return {
        type : CHANGE_THEME,
        payload : newTheme,
    }
}

// функция для асинхронных действий
export function asyncIncrement() {
    return function(dispatch1) {  // dispatch1 - название функции любое
        dispatch1(disableButtons());
        
        setTimeout(() => {  // всю асинхронщину пишем тут
            dispatch1(increment());  // в диспатче пишем экшен. Ничего другого сюда нельзя
            dispatch1(enableButtons());
        }, 1000)
    }
} 