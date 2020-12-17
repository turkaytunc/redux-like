import { UserActions } from "../actions/UserActions";
import { IUser } from "../interfaces/IUser";

interface IUsers {
  users: IUser[];
}

export const UserReducer = (state: IUsers, action: UserActions): IUsers => {
  switch (action.type) {
    case "ADD_USER": {
      const { id, name, isAdmin } = action.payload;
      return { ...state, users: [...state.users, { id, name, isAdmin }] };
    }
    case "REMOVE_USER": {
      const id = action.payload;
      return { ...state, users: [...state.users.filter((e) => e.id !== id)] };
    }

    default:
      return state;
  }
};
