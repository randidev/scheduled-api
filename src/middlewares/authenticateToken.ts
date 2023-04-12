/* eslint-disable consistent-return */
import { NextFunction, Request, Response } from "express";
const jwt = require("jsonwebtoken");
require("dotenv").config();

function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err: Error) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized",
      });
    }
    next();
  });
}
module.exports = authenticateToken;
