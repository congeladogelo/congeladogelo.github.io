import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { capitalize, kebabToSentence } from '../../utils/formatString';
import styles from './category-post-page.module.css';
import PostList from '../../components/PostList';
import getPostList from '../../utils/posts';

export default function CategoryPage() {
  const params = useParams();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      setPosts(await getPostList([params.category], false));
    };
    fetchPosts();
  }, [params.category]);

  return (
    <div id={styles['category-post-page']}>
      { (posts.length > 0) && (
        <>
          <section>
            <h1>{capitalize(kebabToSentence(params.category))}</h1>
          </section>
          <section>
            <PostList posts={posts} />
          </section>
        </>
      )}
    </div>
  );
}
