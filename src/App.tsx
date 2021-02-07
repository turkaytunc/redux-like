import React from 'react';
import './app.scss';
import PostList from './components/post-list/PostList';
import UserList from './components/user-list/UserList';

function App(): JSX.Element {
  return (
    <main className="App">
      <UserList />
      <br />
      <hr />
      <br />
      <PostList />
    </main>
  );
}

export default App;
