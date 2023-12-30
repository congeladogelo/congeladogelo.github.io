import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import styles from './post-card.module.css';
import CategoryTagList from '../CategoryTagList';
import Date from '../Date';

export default function PostCard({ postId, showCategories }) {
  const navigate = useNavigate();
  const [post, setPost] = useState();

  useEffect(() => {
    const getPost = async () => {
      const response = await fetch(`/posts/${postId}.post`);
      setPost(await response.json());
    };
    getPost();
  }, [postId]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [post]);

  const redirectToPostPage = () => {
    navigate(`/post/${postId}`);
  };

  return (
    (post && typeof post === 'object') && (
      <div className={styles['post-card']}>
        <button className={styles['post-card-button']} type="button" onClick={redirectToPostPage}>
          <h3>{post.title}</h3>
        </button>
        {(showCategories) && (
          <CategoryTagList categories={post.categories} />
        )}
        <button className={styles['post-card-button']} type="button" onClick={redirectToPostPage}>
          <Date>{post['created-at']}</Date>
        </button>
      </div>
    )
  );
}

PostCard.propTypes = {
  postId: PropTypes.string.isRequired,
  showCategories: PropTypes.bool,
};

PostCard.defaultProps = {
  showCategories: false,
};
