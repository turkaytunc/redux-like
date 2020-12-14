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

const initialState: IPosts = {
  posts: [{ userId: 0, id: 0, title: "", body: "" }],
};

const reducer = () => {};

export const Store = React.createContext<IPosts>(initialState);

export const StoreProvider = (props: any): JSX.Element => {
  return <Store.Provider value={initialState}>{props.children}</Store.Provider>;
};
