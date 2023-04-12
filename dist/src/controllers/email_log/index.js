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
const schema_1 = require("./config/schema");
const messages_1 = require("./config/messages");
const email_log_1 = __importDefault(require("../../models/email_log"));
const EmailLogController = {
    getLog: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const logs = yield email_log_1.default.find({});
            return res.status(200).send({
                success: true,
                data: logs,
            });
        }
        catch (err) {
            return res.status(500).send({
                success: false,
                message: messages_1.MESSAGES.GET_LOG.ERROR.SERVER,
            });
        }
    }),
    getOneLog: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { userId } = req.params;
            const logs = yield email_log_1.default.findOne({ userId });
            return res.status(200).send({
                success: true,
                data: logs,
            });
        }
        catch (err) {
            return res.status(500).send({
                success: false,
                message: messages_1.MESSAGES.GET_LOG.ERROR.SERVER,
            });
        }
    }),
    setLog: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            schema_1.AddLogSchema.validateSync(req.body, {
                stripUnknown: true,
            });
            const log = new email_log_1.default(req.body);
            yield log.save();
            return res.status(200).send({
                success: true,
                message: messages_1.MESSAGES.ADD_LOG.SUCCESS,
                id: log._id,
            });
        }
        catch (err) {
            return res.status(500).send({
                success: false,
                message: err.message,
            });
        }
    }),
    deleteOneLog: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            yield email_log_1.default.findByIdAndDelete(id);
            return res.status(200).send({
                success: true,
                data: messages_1.MESSAGES.DELETE_LOG.SUCCESS,
            });
        }
        catch (err) {
            return res.status(500).send({
                success: false,
                message: messages_1.MESSAGES.GET_LOG.ERROR.SERVER,
            });
        }
    }),
};
module.exports = EmailLogController;
