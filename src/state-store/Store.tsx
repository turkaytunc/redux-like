import React from "react";
import { Actions } from "./Actions";
import { IPost } from "./IPost";

interface IPosts {
  posts: Array<IPost>;
}

const initialState: IPosts = {
  posts: [],
};

const reducer = (state: IPosts, action: Actions): IPosts => {
  switch (action.type) {
    case "ADD": {
      const { userId, id, title, body } = action.payload;
      return { ...state, posts: [...state.posts, { userId, id, title, body }] };
    }
    case "REMOVE":
      const { id } = action.payload;
      return { ...state, posts: [...state.posts.filter((e) => e.id !== id)] };
    default:
      return state;
  }
};

export const Store = React.createContext<{
  state: IPosts;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

export const StoreProvider: React.FC = (props: any): JSX.Element => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
};
