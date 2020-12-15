import React from "react";
import "./app.scss";
import { Store } from "./state-store/Store";

function App(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);
  const [input, setInput] = React.useState("");

  const addPost = () => {
    dispatch({
      type: "ADD",
      payload: JSON.parse(input),
    });
  };

  const deletePost = (
    id: number,
    event: React.FormEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    dispatch({
      type: "REMOVE",
      payload: id,
    });
  };

  return (
    <main className="App">
      <input
        type="text"
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
      />
      <button onClick={() => addPost()}>Add</button>
      <hr />

      {state.posts.map((e) => (
        <div key={e.id}>
          <div>title: {e.title}</div>
          <hr />
          <div>{e.body}</div>
          <button
            onClick={(event: React.FormEvent<HTMLButtonElement>) =>
              deletePost(e.id, event)
            }
          >
            &times;
          </button>
        </div>
      ))}
    </main>
  );
}

export default App;
