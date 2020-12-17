import { Actions } from "../actions/Actions";
import { IPosts } from "../interfaces/IPosts";

export const postReducer = (state: IPosts, action: Actions): IPosts => {
  switch (action.type) {
    case "ADD":
      const { userId, id, title, body } = action.payload;
      return { ...state, posts: [...state.posts, { userId, id, title, body }] };
    case "REMOVE":
      return {
        ...state,
        posts: [...state.posts.filter((e) => e.id !== action.payload)],
      };
    default:
      return state;
  }
};
