import React from "react";
import "./App.css";
import { Store } from "./state-store/Store";

function App(): JSX.Element {
  const store = React.useContext(Store);

  return <main className="App">{console.log(store) as any}</main>;
}

export default App;
