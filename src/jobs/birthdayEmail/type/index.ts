import { IUser } from "../../../models/user/type";

export interface IUsersData extends IUser {
  _id: string;
}

export interface IUsersResponse {
  success: true;
  data: IUsersData[];
}
