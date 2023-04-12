import { object, string } from "yup";

export const AuthSchema = object({
  username: string().required(),
  password: string().required(),
});
