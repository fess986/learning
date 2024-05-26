import { combineReducers } from "redux";
import postsReduser from "./postsReduser";
import appReduser from "./appReduser";

export const rootReduser = combineReducers(
    {
        posts: postsReduser,
        app: appReduser,
    }
)