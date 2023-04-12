import internalApi from "../../instances/internal";
import { IUser } from "../../models/user/type";

export const getUsers = async () => {
  return await internalApi({
    url: "/users",
    method: "GET",
  });
};

export const addUser = async (payload: IUser, token: string) => {
  return await internalApi({
    url: "/users",
    method: "POST",
    data: payload,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getToken = async () => {
  return await internalApi({
    url: "/token",
    method: "POST",
    data: {
      username: "user",
      password: "password",
    },
  });
};
