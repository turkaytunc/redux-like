import React from "react";
import { PostActions } from "./actions/PostActions";
import { UserActions } from "./actions/UserActions";
import { IPost } from "./interfaces/IPost";
import { IUser } from "./interfaces/IUser";
import { postReducer } from "./reducers/postReducer";
import { userReducer } from "./reducers/userReducer";

type InitialStateType = {
  posts: IPost[];
  users: IUser[];
};

const initialState = {
  posts: [],
  users: [],
};

const rootReducer = (
  { posts, users }: InitialStateType,
  action: PostActions | UserActions
) => ({
  posts: postReducer(posts, action as PostActions),
  users: userReducer(users, action as UserActions),
});

export const Store = React.createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<PostActions | UserActions>;
}>({
  state: (initialState as unknown) as InitialStateType,
  dispatch: () => null,
});

export const StoreProvider: React.FC = (props: {
  children?: React.ReactNode;
}): JSX.Element => {
  const [state, dispatch] = React.useReducer(
    rootReducer,
    (initialState as unknown) as InitialStateType
  );

  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
};
