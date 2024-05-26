import React from "react";
import Post from "./post";
import { connect } from "react-redux";  // подключаем этот компонент к стору

const Posts = ({syncPosts}) => {
    if (!syncPosts.length) {
        return <p>постов пока нет!</p>
    }

    return syncPosts.map(post => <Post post={post} key={post.id}/>)
}

// при помощи этой функции мы передаем в пропсы компонента массив из редакса по адресу state.posts.posts, где state- это наш стор
const mapStateToProps = (state) => {
    return {
        syncPosts: state.posts.posts
    }
}

export default connect(mapStateToProps,null)(Posts);  // когда мы пользуемся коннектом, то по дефолту экспортируем это. При этом в экспорт попадает именно Posts