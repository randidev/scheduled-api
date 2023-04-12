import { Schema } from "mongoose";
import { IUser } from "./type";
import mongoose from "mongoose";

const UserSchema = new Schema<IUser>({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  birthdayDate: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  timezone: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("user", UserSchema);

export default User;
