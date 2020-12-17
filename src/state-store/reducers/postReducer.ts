import { PostActions } from "../actions/PostActions";
import { IPost } from "../interfaces/IPost";

interface IPosts {
  posts: Array<IPost>;
}

export const postReducer = (state: IPosts, action: PostActions): IPosts => {
  switch (action.type) {
    case "ADD_POST":
      const { userId, id, title, body } = action.payload;
      return { ...state, posts: [...state.posts, { userId, id, title, body }] };
    case "REMOVE_POST":
      return {
        ...state,
        posts: [...state.posts.filter((e) => e.id !== action.payload)],
      };
    default:
      return state;
  }
};
