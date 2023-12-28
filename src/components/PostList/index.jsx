import React from 'react';
import PropTypes from 'prop-types';
import PostCard from '../PostCard';
import styles from './post-list.module.css';

export default function PostList({ posts, showCategory }) {
  return (
    <div>
      <div className={styles['post-card-list']}>
        {posts.map((post) => (
          <PostCard
            key={`${post.category}-${post.postId}`}
            category={post.category}
            postId={post.postId}
            showCategory={showCategory}
          />
        ))}
      </div>
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      postId: PropTypes.string,
    }),
  ).isRequired,
  showCategory: PropTypes.bool,
};

PostList.defaultProps = {
  showCategory: false,
};
