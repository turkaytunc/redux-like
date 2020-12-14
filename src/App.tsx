import React, { ReactNode } from "react";
import "./app.scss";
import { Store } from "./state-store/Store";

function App(): JSX.Element {
  const store = React.useContext(Store);

  return <main className="App">{console.log(store) as ReactNode}</main>;
}

export default App;
