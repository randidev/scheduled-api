import { date, object, string } from "yup";

export const AddUserSchema = object({
  timezone: string().required(),
  location: string().required(),
  birthdayDate: date().required(),
  email: string().required(),
  firstname: string().required(),
  lastname: string().required(),
});

export const UpdateUserSchema = object({
  timezone: string().required(),
  location: string().required(),
  birthdayDate: date().required(),
  firstname: string().required(),
  email: string().required(),
  lastname: string().required(),
  id: string().required(),
});

export const DeleteUserSchema = object({
  id: string().required(),
});
