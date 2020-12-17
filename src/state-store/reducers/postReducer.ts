import { PostActions } from "../actions/PostActions";
import { IPost } from "../interfaces/IPost";

export const postReducer = (state: IPost[], action: PostActions): IPost[] => {
  switch (action.type) {
    case "ADD_POST":
      const { userId, id, title, body } = action.payload;
      return [...state, { userId, id, title, body }];
    case "REMOVE_POST":
      return [...state.filter((e) => e.id !== action.payload)];
    default:
      return state;
  }
};
