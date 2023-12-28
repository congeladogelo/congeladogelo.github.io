import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import styles from './post-card.module.css';
import { formatDateToPtBR } from '../../utils/date';
import { capitalize, kebabToSentence } from '../../utils/formatString';

export default function PostCard({ category, postId, showCategory }) {
  const navigate = useNavigate();
  const [post, setPost] = useState();

  useEffect(() => {
    const getPost = async () => {
      const response = await fetch(`/posts/${category}/${postId}.post`);
      setPost(await response.json());
    };
    getPost();
  }, []);

  const redirectToPost = () => {
    navigate(`/${category}/${postId}`);
  };

  return (
    (post) && (
      <button className={styles['post-card-button']} type="button" onClick={redirectToPost}>
        <div className={styles['post-card']}>
          <h3>{post.title}</h3>
          {(showCategory) && (
          <p className={styles.category}>
            {capitalize(kebabToSentence(category))}
          </p>
          )}
          <p>{formatDateToPtBR(post['created-at'])}</p>
        </div>
      </button>
    )
  );
}

PostCard.propTypes = {
  category: PropTypes.string.isRequired,
  postId: PropTypes.string.isRequired,
  showCategory: PropTypes.bool,
};

PostCard.defaultProps = {
  showCategory: false,
};
