import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../../components/Post';
import styles from './post-page.module.css';
import getPostList from '../../utils/posts';
import PostList from '../../components/PostList';

export default function PostPage() {
  const params = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postId = params.post;
        const response = await fetch(`/posts/${postId}.post`);
        const data = await response.json();
        setPost(data);
      } catch {
        setPost(null);
      }
    };
    fetchPost();
  }, [params.post]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [post]);

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      const postList = (await getPostList(post.categories, false))
        .filter((postId) => postId !== params.post);
      setRelatedPosts(postList);
    };
    if (post?.categories) {
      fetchRelatedPosts();
    }
  }, [post]);

  return (
    (post) && (
      <div id={styles['post-page']}>
        <Post post={post} />
        { (relatedPosts.length > 0) && (
          <>
            <hr />
            <PostList posts={relatedPosts} />
          </>
        ) }
      </div>
    )
  );
}
