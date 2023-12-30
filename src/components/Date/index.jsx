import React from 'react';
import PropTypes from 'prop-types';
import styles from './time.module.css';
import { formatDate } from '../../utils/date';

export default function Date({ children }) {
  return (
    <p className={styles.time}>{formatDate(children, 'pt-BR')}</p>
  );
}

Date.propTypes = {
  children: PropTypes.string.isRequired,
};
