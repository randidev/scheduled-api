import jwt from "jsonwebtoken";
import { object } from "yup";

export const generateToken = (payload: typeof object) => {
  return jwt.sign(payload, process.env.JWT_SECRET || "secret-key", {
    expiresIn: "1w",
  });
};
