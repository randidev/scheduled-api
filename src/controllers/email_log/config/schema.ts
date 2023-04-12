import { object, string, boolean } from "yup";

export const AddLogSchema = object({
  userId: string().required(),
  status: boolean().required(),
});
