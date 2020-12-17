import { IPost } from "../interfaces/IPost";

export type PostActions =
  | {
      type: "ADD_POST";
      payload: IPost;
    }
  | {
      type: "REMOVE_POST";
      payload: number;
    };
