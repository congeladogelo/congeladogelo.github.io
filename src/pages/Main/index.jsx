import React, { useEffect, useState } from 'react';
import PostList from '../../components/PostList';
import styles from './main.module.css';
import getPostList from '../../utils/posts';

export default function Main() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const postList = await getPostList(null, false);
      setPosts(postList);
    };
    getPosts();
  }, []);

  return (
    <div id={styles.main}>
      {
        (posts.length > 0)
          && (
          <PostList
            posts={posts}
            showCategories
          />
          )
      }
    </div>
  );
}
