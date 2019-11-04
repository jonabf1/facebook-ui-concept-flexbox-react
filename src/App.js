import React from 'react';
import './styles/globalstyle.css';
import Header from './components/header';
import PostList from './components/postList';

export default function App() {
  return (
    <>
      <Header />
      <PostList />
    </>
  )
}