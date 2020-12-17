import { IUser } from '../interfaces/IUser';

export type UserActions =
	| {
			type: 'ADD_USER';
			payload: IUser;
	  }
	| {
			type: 'REMOVE_USER';
			payload: number;
	  };
