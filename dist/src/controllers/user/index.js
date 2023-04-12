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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../../models/user"));
const schema_1 = require("./config/schema");
const messages_1 = require("./config/messages");
const UserController = {
    getAll: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const results = yield user_1.default.find({});
            return res.status(200).send({
                success: true,
                data: results,
            });
        }
        catch (err) {
            return res.status(500).send({
                success: false,
                message: messages_1.MESSAGES.GET_USER.ERROR.SERVER,
            });
        }
    }),
    createOne: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            schema_1.AddUserSchema.validateSync(req.body, {
                stripUnknown: true,
            });
            const exist = yield user_1.default.find({ email: req.body.email });
            console.log(exist);
            if (exist)
                return res.status(409).send({
                    success: true,
                    message: messages_1.MESSAGES.CREATE_USER.ERROR.EMAIL_EXIST,
                });
            const user = new user_1.default(req.body);
            yield user.save();
            return res.status(200).send({
                success: true,
                message: messages_1.MESSAGES.CREATE_USER.SUCCESS,
            });
        }
        catch (err) {
            return res.status(500).send({
                success: false,
                message: err.message,
            });
        }
    }),
    updateOne: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            schema_1.UpdateUserSchema.validateSync(req.body, {
                stripUnknown: true,
            });
            const { id, firstname, lastname, birthdayDate, location } = req.body;
            yield user_1.default.findByIdAndUpdate(id, {
                firstname,
                lastname,
                birthdayDate,
                location,
            });
            return res.status(200).send({
                success: true,
                message: messages_1.MESSAGES.UPDATE_USER.SUCCESS,
            });
        }
        catch (err) {
            return res.status(500).send({
                success: false,
                message: err.message,
            });
        }
    }),
    deleteOne: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            schema_1.DeleteUserSchema.validateSync(req.body, {
                stripUnknown: true,
            });
            const { id } = req.body;
            yield user_1.default.findByIdAndDelete(id);
            return res.status(200).send({
                success: true,
                message: messages_1.MESSAGES.DELETE_USER.SUCCESS,
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
module.exports = UserController;
