import { CREATE_POST, FETCH_POSTS, SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT } from "./types" 

export const createPost = (post) => {
    return (
        {
            type: CREATE_POST,
            payload: post,
        }
    )
    }


export const showAlert = (text = 'asssss') => {
    return (dispatch) => {
        dispatch({
        type: SHOW_ALERT,
        payload: text,
    })  

    setTimeout(() => {
            dispatch(hideAlert());
        }, 1000)
}
}

export const hideAlert = () => {
    return {
        type: HIDE_ALERT,
    }
}

const showLoader = () => {
    return {
        type: SHOW_LOADER,
    }
}

const hideLoader = () => {
    return {
        type: HIDE_LOADER,
    }
}


export const fetchPosts = () => {
    return async (dispatch1) => {
        dispatch1(showLoader())
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        const json = await response.json();

        setTimeout(() =>{
            dispatch1({type: FETCH_POSTS, payload: json})  // тут мы не создаем дополнительного экшена для диспатча, а напрямую обращаемся к экшену-объекту
            dispatch1(hideLoader())
        }, 500)
    }
}