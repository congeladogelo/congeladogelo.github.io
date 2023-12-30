import React from 'react';
import { useParams } from 'react-router-dom';
import { capitalize, kebabToSentence } from '../../utils/formatString';
import CategoryPosts from '../../components/CategoryPosts';
import styles from './category-post-page.module.css';

export default function CategoryPage() {
  const params = useParams();

  return (
    <div id={styles['category-post-page']}>
      <section>
        <h1>{capitalize(kebabToSentence(params.category))}</h1>
      </section>
      <section>
        <CategoryPosts categories={[params.category]} />
      </section>
    </div>
  );
}
