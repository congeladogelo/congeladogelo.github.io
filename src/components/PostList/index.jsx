import React from 'react';
import PropTypes from 'prop-types';
import PostCard from '../PostCard';
import styles from './post-list.module.css';

export default function PostList({ posts, showCategories }) {
  return (
    <div>
      <div className={styles['post-card-list']}>
        {posts.map((post) => (
          <PostCard
            key={`${post}`}
            postId={post}
            showCategories={showCategories}
          />
        ))}
      </div>
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  showCategories: PropTypes.bool,
};

PostList.defaultProps = {
  showCategories: false,
};
