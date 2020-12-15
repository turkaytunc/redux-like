import React from "react";
import { Actions } from "./Actions";
import { IPosts } from "./interfaces/IPosts";
import { postReducer } from "./reducers/postReducer";

const initialState: IPosts = {
  posts: [],
};

export const Store = React.createContext<{
  state: IPosts;
  dispatch: React.Dispatch<Actions>;
}>({ state: initialState, dispatch: () => null });

export const StoreProvider: React.FC = (props: any): JSX.Element => {
  const [state, dispatch] = React.useReducer(postReducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
};
