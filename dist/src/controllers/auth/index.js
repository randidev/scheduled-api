"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("./config/schema");
const messages_1 = require("./config/messages");
const helpers_1 = require("../../utils/helpers");
const AuthController = {
    generateToken: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            schema_1.AuthSchema.validateSync(req.body, {
                stripUnknown: true,
            });
            const { username, password } = req.body;
            if (username !== "user" && password !== "password")
                return res.status(404).send({
                    success: false,
                    message: messages_1.MESSAGES.GET_TOKEN.ERROR.BAD_CREDENTIALS,
                });
            const token = (0, helpers_1.generateToken)(req.body);
            return res.status(200).send({
                success: true,
                token: token,
            });
        }
        catch (err) {
            return res.status(500).send({
                success: false,
                message: err.message,
            });
        }
    }),
};
module.exports = AuthController;
