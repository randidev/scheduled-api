import User from "../../models/user";
import { Request, Response } from "express";
import { AuthSchema } from "./config/schema";
import { MESSAGES } from "./config/messages";
import { generateToken } from "../../utils/helpers";

const AuthController = {
  generateToken: async (req: Request, res: Response) => {
    try {
      AuthSchema.validateSync(req.body, {
        stripUnknown: true,
      });

      const { username, password } = req.body;

      if (username !== "user" && password !== "password")
        return res.status(404).send({
          success: false,
          message: MESSAGES.GET_TOKEN.ERROR.BAD_CREDENTIALS,
        });

      const token = generateToken(req.body);

      return res.status(200).send({
        success: true,
        token: token,
      });
    } catch (err: any) {
      return res.status(500).send({
        success: false,
        message: err.message,
      });
    }
  },
};

module.exports = AuthController;
