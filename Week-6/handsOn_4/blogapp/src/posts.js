// src/Posts.js
import React, { useState, useEffect } from 'react';
import Post from './post';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setHasError(true);
        alert('An error occurred while loading posts.');
      }
    };

    loadPosts();
  }, []); // Empty dependency array means this runs once (like componentDidMount)

  if (hasError) {
    return <p>Error loading posts.</p>;
  }

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <Post key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
};

export default Posts;
