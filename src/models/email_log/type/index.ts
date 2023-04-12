import mongoose from "mongoose";

export interface IEmailLog {
  userId: mongoose.Types.ObjectId;
  status: boolean;
}
