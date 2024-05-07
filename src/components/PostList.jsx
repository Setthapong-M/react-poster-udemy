import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';
import Post from './Post'


function PostList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className='max-w-screen-xl grid grid-cols-4 gap-4 mx-auto'>
        {posts.map(post => (
          <Post id={post.id} key={post.body} author = {post.author} body = {post.body} />
        ))}
      </ul>
      )}
      {posts.length === 0 &&  (
        <div className='text-center text-xl'>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
    
  )
}

export default PostList