import React from "react";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IPosts {
  posts: Array<IPost>;
}

interface IReducerAction {
  type: string;
  payload: IPost;
}

const initialState: IPosts = {
  posts: [{ userId: 0, id: 0, title: "", body: "" }],
};

const reducer = (state: IPosts, action: IReducerAction): IPosts => {
  switch (action.type) {
    case "ADD":
      const { userId, id, title, body } = action.payload;
      return { ...state, posts: [...state.posts, { userId, id, title, body }] };
    default:
      return state;
  }
};

export const Store = React.createContext<IPosts | any>(initialState);
export const StoreProvider = (props: any): JSX.Element => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
};
