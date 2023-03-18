import React , { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts,postsSelector } from "../slices/Posts";
import { Post } from "../components/Post";

   const PostsPage =   ()=>{
   const dispatch=useDispatch();
   const {post,loading,hasErrors}=useSelector(postsSelector)
  
   useEffect(() =>{
    dispatch(fetchPosts())
   }, [dispatch])

  const renderPosts = ()=>{
    if ( loading ) return <p> Loading posts ...</p>
    if (hasErrors) return  <p>unable to display posts.</p>

    return post.map((post) =><Post key={post.id} post={post} excerpt/>)
  }


 return (
    <section>
        <h1>Posts</h1>
        {renderPosts}
    </section>
 )

   } 
export default PostsPage