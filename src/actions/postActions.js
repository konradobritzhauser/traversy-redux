import {FETCH_POSTS, NEW_POST} from "./types"

export const fetchPosts=function(){
    return function(dispatch){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(data=>dispatch({type:FETCH_POSTS,payload:data}))
    }
}
