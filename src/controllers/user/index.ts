import User from "../../models/user";
import { Request, Response } from "express";
import {
  AddUserSchema,
  DeleteUserSchema,
  UpdateUserSchema,
} from "./config/schema";
import { MESSAGES } from "./config/messages";

export const UserController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const results = await User.find({});

      return res.status(200).send({
        success: true,
        data: results,
      });
    } catch (err) {
      return res.status(500).send({
        success: false,
        message: MESSAGES.GET_USER.ERROR.SERVER,
      });
    }
  },
  createOne: async (req: Request, res: Response) => {
    try {
      AddUserSchema.validateSync(req.body, {
        stripUnknown: true,
      });

      const exist = await User.find({ email: req.body.email });

      if (exist && exist.length > 0)
        return res.status(409).send({
          success: false,
          message: MESSAGES.CREATE_USER.ERROR.EMAIL_EXIST,
        });

      const user = new User(req.body);

      await user.save();

      return res.status(200).send({
        success: true,
        message: MESSAGES.CREATE_USER.SUCCESS,
      });
    } catch (err: any) {
      console.log(err.message);
      return res.status(500).send({
        success: false,
        message: err.message,
      });
    }
  },
  updateOne: async (req: Request, res: Response) => {
    try {
      UpdateUserSchema.validateSync(req.body, {
        stripUnknown: true,
      });

      const { id, firstname, lastname, birthdayDate, location } = req.body;

      await User.findByIdAndUpdate(id, {
        firstname,
        lastname,
        birthdayDate,
        location,
      });

      return res.status(200).send({
        success: true,
        message: MESSAGES.UPDATE_USER.SUCCESS,
      });
    } catch (err: any) {
      return res.status(500).send({
        success: false,
        message: err.message,
      });
    }
  },
  deleteOne: async (req: Request, res: Response) => {
    try {
      DeleteUserSchema.validateSync(req.body, {
        stripUnknown: true,
      });

      const { id } = req.body;

      await User.findByIdAndDelete(id);

      return res.status(200).send({
        success: true,
        message: MESSAGES.DELETE_USER.SUCCESS,
      });
    } catch (err: any) {
      return res.status(500).send({
        success: false,
        message: err.message,
      });
    }
  },
};

module.exports = UserController;
