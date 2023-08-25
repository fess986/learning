import React from "react";
import Post from "./post";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";
import Loader from "./loader";

const FetchedPosts = () => {
    const dispatch = useDispatch();  // нужен для того чтобы у нас имелась возможность диспатчить экшены
    const posts1 = useSelector(state => state.posts.fetchedPosts);  // нужен для того чтобы извлекать из стора данные. В данном случае мы обращаемся к state.posts, так как у нас комбинированный стор с двумя редьюсерами

    const isLoading = useSelector(state => state.app.loading);
    
    if (isLoading) {
        return (
            <Loader />
        )
    }

    if (!posts1.length) {
        return <button
        onClick={() => dispatch(fetchPosts())}
        >загрузить посты</button>
    }
    return posts1.map(post => <Post post={post} key={post.id}/>)
}

export default FetchedPosts;