import React from "react";
import "./app.scss";
import { Store } from "./state-store/Store";
import { IPost } from "./state-store/interfaces/IPost";

function App(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);
  const [input, setInput] = React.useState("");

  const addPost = () => {
    const parsed = JSON.parse(input);
    if (parsed.hasOwnProperty("id")) {
      dispatch({
        type: "ADD",
        payload: parsed,
      });
    }
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
      <button onClick={() => addPost()}>Add Post</button>
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
            style={{ fontSize: "2em" }}
          >
            &times;
          </button>
        </div>
      ))}
    </main>
  );
}

export default App;
