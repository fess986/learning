import { INCREMENT, DECREMENT, CHANGE_THEME, ENABLE_BUTTONS, DISABLE_BUTTONS} from "./types";
import { combineReducers } from "redux";

function counterReducer(state = 0, action) {

    if (action.type === INCREMENT) {
        return state + 1;
    } else if (action.type === DECREMENT) {
        return state - 1;
    } 

    return state;
}

const initTheme = {
    value : 'light',
    disabled : false,  // обязательно тип булеан !!!!!!!! иначе работает через опу
}

function themeReducer(state = initTheme, action) {
    switch (action.type) {  
        case CHANGE_THEME: 
            return {...state, value: action.payload}  // разворачиваем объект и меняем поле value
        case ENABLE_BUTTONS:
            return {...state, disabled : false}
        case DISABLE_BUTTONS:
            return {...state, disabled : true}

        default: return state;
    }
}

export const rootReducer = combineReducers({  // в итоге в сторе будет объект с заданными ключами
    counter : counterReducer,
    theme : themeReducer,
})