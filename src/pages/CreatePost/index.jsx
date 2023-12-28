import React, { useState } from 'react';
import styles from './create-post.module.css';
import { sentenceToKebab } from '../../utils/formatString';
import { getDate } from '../../utils/date';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState([]);

  const updateContentBlock = (index, { target }) => {
    setContent((prevContent) => {
      const newContent = [...prevContent];
      newContent[index].content = target.value;
      return newContent;
    });
  };

  const newContentBlock = (type) => {
    setContent((prevContent) => [...prevContent, { type, content: '' }]);
  };

  const removeContentBlock = (indexToRemove) => {
    setContent(
      (prevContent) => prevContent.filter((_contentBlock, index) => index !== indexToRemove),
    );
  };

  const downloadPost = () => {
    const date = getDate();
    const jsonString = `${JSON.stringify({
      title, 'created-at': date, 'updated-at': date, content,
    }, null, 2)}\n`;
    const blob = new Blob([jsonString], { type: 'application/json' });
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = `${sentenceToKebab(title)}.post`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(blobUrl);
  };

  return (
    <div id={styles['create-post']}>
      <section>
        <p>Title:</p>
        <input id={styles.title} type="text" value={title} onChange={({ target }) => setTitle(target.value)} />
      </section>
      {(content.length > 0) && (
        <section>
          <p>Content:</p>
          <div id={styles.content}>
            {
          content.map((block, index) => {
            let inputElement;
            if (block.type === 'text') {
              inputElement = <textarea cols="30" rows="10" placeholder="text" value={block.content} onChange={(event) => updateContentBlock(index, event)} />;
            } else if (block.type === 'image') {
              inputElement = <input placeholder="image" onChange={(event) => updateContentBlock(index, event)} />;
            }
            return (
              <div className={styles['content-block']} key={`${block.type}-${index}`}>
                {inputElement}
                <button type="button" onClick={() => removeContentBlock(index)}>Remove</button>
              </div>
            );
          })
        }
          </div>
        </section>
      )}
      <section>
        <div id={styles['new-content']}>
          <button type="button" onClick={() => newContentBlock('text')}>New text</button>
          <button type="button" onClick={() => newContentBlock('image')}>New image</button>
        </div>
      </section>
      <section>
        <button type="button" onClick={downloadPost}>Download Post</button>
      </section>
    </div>
  );
}
