import React, { useEffect } from "react";
import "./app.scss";
import { Store } from "./state-store/Store";

function App(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);
  const [input, setInput] = React.useState("");

  const addItemAction = () => {
    dispatch({
      type: "ADD",
      payload: JSON.parse(input),
    });
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <main className="App">
      <input
        type="text"
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
      />
      <button onClick={() => addItemAction()}>Add</button>
    </main>
  );
}

export default App;
