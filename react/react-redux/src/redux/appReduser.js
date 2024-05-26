import { SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT } from "./types"

const initState = {
    loading : false,
    alertText: null,
}

const appReduser = (state = initState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {...state, loading: true}
        case HIDE_LOADER:
            return {...state, loading: false}
        case SHOW_ALERT:
            return {...state, alertText: action.payload}
        case HIDE_ALERT:
            return {...state, alertText: null}
        default: return state
    }
}

export default appReduser;