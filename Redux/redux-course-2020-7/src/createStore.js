// реализация собственного Redux-а, точнее создания стора. Можно заменить на createStore из пакета Redux

const createStore = (rootReducer, initState) => {
    
    // let state = {};  изначально создается объект, но в редаксе мы его инициализируем через редьюсер и initState

    let state = rootReducer(initState, '__INIT__');
    const subscribers = [];
    
    return {
        dispatch(action) {
            state = rootReducer(state, action);  // вызываем редьюсер для изменения стейта
            subscribers.forEach(sub => sub());  // вызываем все коллбеки после изменения стейта
        },

        subscribe(callback) {
            subscribers.push(callback);
        },

        getState() {
            return state;
        },

    }
}

export default createStore;