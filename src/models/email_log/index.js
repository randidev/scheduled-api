"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const EmailLogSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_2.default.Schema.Types.ObjectId,
        required: true,
        ref: "user",
    },
    status: {
        type: Boolean,
        required: true,
    },
});
const EmailLog = mongoose_2.default.model("email_log", EmailLogSchema);
exports.default = EmailLog;
