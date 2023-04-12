import emailService from "../../instances/email";
import internalApi from "../../instances/internal";
import { ISendEmail } from "./type";
import { IEmailLog } from "../../models/email_log/type";

export const sendEmail = async (user: ISendEmail) => {
  return await emailService({
    url: "/send-email",
    method: "POST",
    maxBodyLength: Infinity,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    data: {
      email: user.email,
      message: `Hey, ${user.firstname} ${user.lastname} it’s your birthday.`,
    },
  });
};

export const addEmailLog = async (token: string, payload: IEmailLog) => {
  return await internalApi({
    url: "/email-log",
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      userId: payload.userId,
      status: payload.status,
    },
  });
};

export const getEmailLogDetail = async (userId: string) => {
  return await internalApi({
    url: `/email-log/${userId}`,
    method: "GET",
  });
};

export const deleteEmailLog = async (token: string, id: string) => {
  return await internalApi({
    url: `/email-log/${id}`,
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
