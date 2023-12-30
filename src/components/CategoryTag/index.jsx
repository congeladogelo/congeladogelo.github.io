import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './category-tag.module.css';
import { capitalize, kebabToSentence } from '../../utils/formatString';

export default function CategoryTag({ category }) {
  const navigate = useNavigate();

  const redirectToCategoryPage = () => {
    navigate(`/category/${category}`);
  };

  return (
    <button type="button" className={styles['category-button']} onClick={redirectToCategoryPage}>
      <p className={styles.category}>
        {capitalize(kebabToSentence(category))}
      </p>
    </button>
  );
}

CategoryTag.propTypes = {
  category: PropTypes.string.isRequired,
};
