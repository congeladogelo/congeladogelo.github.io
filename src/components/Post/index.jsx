import React from 'react';
import PropTypes from 'prop-types';
import styles from './post.module.css';
import { formatDate } from '../../utils/date';
import CategoryTagList from '../CategoryTagList';

export default function Post({ post }) {
  return (
    <div className={styles.post}>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.date}>{formatDate(post['created-at'], 'pt-BR')}</p>
      <div className={styles.content}>
        {post.content.map((block, index) => {
          const key = `${block.type}-${index}`;
          if (block.type === 'text') {
            return <p key={key} className={styles.paragraph}>{block.content}</p>;
          }
          if (block.type === 'image') {
            return <img key={key} className={styles.image} src={`/images/${block.content}`} alt={block.content} />;
          }
          if (block.type === 'code') {
            return <code className={styles.code} key={key}>{block.content}</code>;
          }
          return null;
        })}
      </div>
      <CategoryTagList categories={post.categories} />
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string,
      content: PropTypes.string,
    })).isRequired,
    categories: PropTypes.arrayOf(PropTypes.string),
    'created-at': PropTypes.string.isRequired,
  }),
};

Post.defaultProps = {
  post: {
    categories: [],
  },
};
