import { Schema } from "mongoose";
import { IEmailLog } from "./type";
import mongoose from "mongoose";

const EmailLogSchema = new Schema<IEmailLog>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  status: {
    type: Boolean,
    required: true,
  },
});

const EmailLog = mongoose.model("email_log", EmailLogSchema);

export default EmailLog;
