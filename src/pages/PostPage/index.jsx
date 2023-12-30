import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../../components/Post';
import CategoryPosts from '../../components/CategoryPosts';
import styles from './post-page.module.css';

export default function PostPage() {
  const params = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postId = params.post;
        const response = await fetch(`/posts/${postId}.post`);
        const data = await response.json();
        setPost(data);
      } catch {
        setPost(null);
      }
    };
    fetchPost();
  }, [params.post]);

  return (
    (post) && (
      <div id={styles['post-page']}>
        <Post post={post} />
        <hr />
        <CategoryPosts categories={post.categories} exludedPosts={[params.post]} />
      </div>
    )
  );
}
