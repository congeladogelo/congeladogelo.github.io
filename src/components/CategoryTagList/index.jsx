import React from 'react';
import PropTypes from 'prop-types';
import CategoryTag from '../CategoryTag';
import styles from './category-list.module.css';

export default function CategoryTagList({ categories }) {
  return (
    <div className={styles.categories}>
      {
        categories.map((category) => <CategoryTag key={category} category={category} />)
      }
    </div>
  );
}

CategoryTagList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};
