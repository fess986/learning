import { CREATE_POST, FETCH_POSTS } from "./types";

const initialState = {
    posts: [],
    fetchedPosts: [],
}

const postsReduser = (state = initialState, action) => {

    // в редьюсерах используются чистые функции, то есть те, которые не зависят ни от каких внешних факторов, не имеют сайд эффектов и при этом полностью предсказуемы.
    switch (action.type) {
        case CREATE_POST:
            return {...state, posts: state.posts.concat(action.payload)} // к текущему состоянию стейта приклеиваем то что пришло из экшена
            // return {...state, posts: [...state.posts, action.payload]} // второй способ
        case FETCH_POSTS:
            return {...state, fetchedPosts: action.payload}  // просто грузим посты, заменяя полностью поле fetchedPosts
        default: return state;
    }

}

export default postsReduser;