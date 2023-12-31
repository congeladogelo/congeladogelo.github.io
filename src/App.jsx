import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import CategoryPostPage from './pages/CategoryPostPage';
import PostPage from './pages/PostPage';
import CreatePost from './pages/CreatePost';

export default function App() {
  return (
    <div id="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/category/:category" element={<CategoryPostPage />} />
        <Route path="/post/:post" element={<PostPage />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </div>
  );
}
