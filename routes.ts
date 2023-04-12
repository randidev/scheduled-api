import { Request, Response } from "express";

const expressApp = require("express");

const UserController = require("./src/controllers/user/index");
const EmailLogController = require("./src/controllers/email_log/index");
const AuthController = require("./src/controllers/auth/index");
const auth = require("./src/middlewares/authenticateToken");

const router = expressApp.Router();

router.post("/token/", AuthController.generateToken);

router.get("/users/", UserController.getAll);
router.post("/users/", auth, UserController.createOne);
router.put("/users/", auth, UserController.updateOne);
router.delete("/users/", auth, UserController.deleteOne);

router.get("/email-log/", EmailLogController.getLog);
router.get("/email-log/:userId", EmailLogController.getOneLog);
router.post("/email-log/", auth, EmailLogController.setLog);
router.delete("/email-log/:id", auth, EmailLogController.deleteOneLog);

module.exports = router;
