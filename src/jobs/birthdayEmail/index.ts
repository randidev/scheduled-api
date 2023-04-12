import mongoose from "mongoose";
import {
  addEmailLog,
  deleteEmailLog,
  getEmailLogDetail,
  sendEmail,
} from "../../services/email";
import { getToken, getUsers } from "../../services/internal";
import { IUsersResponse } from "./type";
import moment from "moment-timezone";

const BirthdayEmail = async () => {
  const resToken = await getToken();
  const { token } = resToken.data;

  const resUsers = await getUsers();
  const users: IUsersResponse = resUsers.data;

  users.data.forEach(async (user) => {
    const getLog = await getEmailLogDetail(user._id);

    // check if it's already 9am based on their timezone and it's their birthday or if there's any pending message
    // then it will send a message to the user
    if (
      (moment().tz(user.timezone).format("h") === "9" &&
        moment(user.birthdayDate).format("DD-MM-YYYY") ===
          moment(new Date()).format("DD-MM-YYYY")) ||
      (getLog && getLog.data.status === false)
    ) {
      try {
        const idUser = new mongoose.Types.ObjectId(user._id);
        let addLog: any =
          getLog && getLog.data.status === false ? { data: getLog.data } : null;

        // if there isn't any log yet
        // then insert one for this particular user
        if (!getLog)
          await addEmailLog(token, {
            userId: idUser,
            status: false,
          });

        const sendingEmail = await sendEmail(user);

        // deleting log if email service returning 200
        if (sendingEmail.status === 200 && addLog !== null)
          await deleteEmailLog(token, addLog?.data.id);
      } catch (error: any) {
        console.log(error.message);
      }
    }
  });
};

module.exports = BirthdayEmail;
