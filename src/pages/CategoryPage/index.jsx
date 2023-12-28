import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostList from '../../components/PostList';
import styles from './category-page.module.css';
import getPostList from '../../utils/posts';
import { capitalize, kebabToSentence } from '../../utils/formatString';

export default function CategoryPage() {
  const params = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      setPosts(await getPostList([params.category], false));
    };
    getPosts();
  }, []);

  return (
    <div id={styles['category-page']}>
      { (posts.length > 0) && (
        <>
          <h1>{capitalize(kebabToSentence(params.category))}</h1>
          <PostList posts={posts} />
        </>
      )}
    </div>
  );
}
