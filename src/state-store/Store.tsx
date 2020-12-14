import React from "react";

const initialState = {};

const reducer = () => {};

export const Store = React.createContext(initialState);

export const StoreProvider = (props: any): JSX.Element => {
  return (
    <Store.Provider value={"initialvalue"}>{props.children}</Store.Provider>
  );
};
