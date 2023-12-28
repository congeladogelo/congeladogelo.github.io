import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import CategoryPage from './pages/CategoryPage';
import Post from './pages/Post';
import CreatePost from './pages/CreatePost';

export default function App() {
  return (
    <div id="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:category" element={<CategoryPage />} />
        <Route path="/:category/:post" element={<Post />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </div>
  );
}
