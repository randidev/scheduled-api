import { Request, Response } from "express";
import { AddLogSchema } from "./config/schema";
import { MESSAGES } from "./config/messages";
import EmailLog from "../../models/email_log";

const EmailLogController = {
  getLog: async (req: Request, res: Response) => {
    try {
      const logs = await EmailLog.find({});

      return res.status(200).send({
        success: true,
        data: logs,
      });
    } catch (err: any) {
      return res.status(500).send({
        success: false,
        message: MESSAGES.GET_LOG.ERROR.SERVER,
      });
    }
  },
  getOneLog: async (req: Request, res: Response) => {
    try {
      const { userId } = req.params;

      const logs = await EmailLog.findOne({ userId });

      return res.status(200).send({
        success: true,
        data: logs,
      });
    } catch (err: any) {
      return res.status(500).send({
        success: false,
        message: MESSAGES.GET_LOG.ERROR.SERVER,
      });
    }
  },
  setLog: async (req: Request, res: Response) => {
    try {
      AddLogSchema.validateSync(req.body, {
        stripUnknown: true,
      });

      const log = new EmailLog(req.body);

      await log.save();

      return res.status(200).send({
        success: true,
        message: MESSAGES.ADD_LOG.SUCCESS,
        id: log._id,
      });
    } catch (err: any) {
      return res.status(500).send({
        success: false,
        message: err.message,
      });
    }
  },
  deleteOneLog: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      await EmailLog.findByIdAndDelete(id);

      return res.status(200).send({
        success: true,
        data: MESSAGES.DELETE_LOG.SUCCESS,
      });
    } catch (err: any) {
      return res.status(500).send({
        success: false,
        message: MESSAGES.GET_LOG.ERROR.SERVER,
      });
    }
  },
};

module.exports = EmailLogController;
