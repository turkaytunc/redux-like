import { IPost } from "./interfaces/IPost";

export type Actions =
  | {
      type: "ADD";
      payload: IPost;
    }
  | {
      type: "REMOVE";
      payload: number;
    };
