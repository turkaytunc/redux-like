import React from 'react';
import './app.scss';
import { Store } from './state-store/Store';

function App(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);
  const [input, setInput] = React.useState('');
  const [userInput, setUserInput] = React.useState('');

  const addPost = () => {
    const parsed = JSON.parse(input);
    if (parsed.hasOwnProperty('id')) {
      dispatch({
        type: 'ADD_POST',
        payload: parsed,
      });
    }
  };

  const deletePost = (id: number) => {
    dispatch({
      type: 'REMOVE_POST',
      payload: id,
    });
  };

  const addUser = () => {
    dispatch({
      type: 'ADD_USER',
      payload: JSON.parse(userInput),
    });
  };

  const deleteUser = (id: number) => {
    dispatch({
      type: 'REMOVE_USER',
      payload: id,
    });
  };

  return (
    <main className="App">
      <div className="user-container">
        <input
          type="text"
          value={userInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserInput(e.target.value)}
        />
        <button onClick={() => addUser()}>Add User</button>
        {state.users.map((e) => (
          <div key={e.id}>
            <div>userName: {e.name}</div>
            <div>userRole: {e.isAdmin ? 'Admin' : 'Pleb'}</div>
            <button onClick={() => deleteUser(e.id)} style={{ fontSize: '2em' }}>
              &times;
            </button>
          </div>
        ))}
      </div>
      <hr />
      <br />
      <div className="post-container">
        <input
          type="text"
          value={input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
        />
        <button onClick={() => addPost()}>Add Post</button>
        {state.posts.map((e) => (
          <div key={e.id}>
            <div>title: {e.title}</div>
            <hr />
            <div>{e.body}</div>
            <button onClick={() => deletePost(e.id)} style={{ fontSize: '2em' }}>
              &times;
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
