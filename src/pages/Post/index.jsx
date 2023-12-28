import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './post.module.css';
import { formatDateToPtBR } from '../../utils/date';

export default function Post() {
  const params = useParams();
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { category, post } = params;
        const response = await fetch(`/posts/${category}/${post}.post`);
        const data = await response.json();
        setPostData(data);
      } catch {
        setPostData(null);
      }
    };

    fetchData();
  }, []);

  return (
    (postData) && (
      <div className={styles.post}>
        <h1 className={styles.title}>{postData.title}</h1>
        <p className={styles.date}>{formatDateToPtBR(postData['created-at'])}</p>
        <div className={styles.content}>
          {postData.content.map((block, index) => {
            const key = `${block.type}-${index}`;
            if (block.type === 'text') {
              return <p key={key} className={styles.paragraph}>{block.content}</p>;
            }
            if (block.type === 'image') {
              return <img key={key} className={styles.image} src={`/images/${block.content}`} alt={block.content} />;
            }
            return null;
          })}
        </div>
      </div>
    )
  );
}
