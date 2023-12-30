import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PostList from '../PostList';
import styles from './category-posts.module.css';
import getPostList from '../../utils/posts';

export default function CategoryPosts({ categories, exludedPosts }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      let postList = await getPostList(categories, false);
      postList = postList.filter(
        (post) => !exludedPosts.some((exludedPost) => exludedPost === post),
      );
      setPosts(postList);
    };
    getPosts();
  }, [categories]);

  return (
    <div className={styles['category-posts']}>
      { (posts.length > 0) && (
        <section>
          <PostList posts={posts} showCategories />
        </section>
      )}
    </div>
  );
}

CategoryPosts.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  exludedPosts: PropTypes.arrayOf(PropTypes.string),
};

CategoryPosts.defaultProps = {
  exludedPosts: [],
};
