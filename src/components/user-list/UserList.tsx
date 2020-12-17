import React, { FC } from 'react';
import { Store } from '../../state-store/Store';

const UserList: FC = () => {
  const { state, dispatch } = React.useContext(Store);

  const [userInput, setUserInput] = React.useState('');

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
  );
};

export default UserList;
