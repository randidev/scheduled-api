"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    birthdayDate: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    timezone: {
        type: String,
        required: true,
    },
});
const User = mongoose_2.default.model("user", UserSchema);
exports.default = User;
