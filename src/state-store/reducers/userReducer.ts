import { UserActions } from '../actions/UserActions';
import { IUser } from '../interfaces/IUser';

export const userReducer = (state: IUser[], action: UserActions): IUser[] => {
  switch (action.type) {
    case 'ADD_USER': {
      const { id, name, isAdmin } = action.payload;
      return [...state, { id, name, isAdmin }];
    }
    case 'REMOVE_USER': {
      const id = action.payload;
      return [...state.filter((e) => e.id !== id)];
    }
    default:
      return state;
  }
};
