"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const emailService = axios_1.default.create({
    baseURL: process.env.EMAIL_SERVICE_BASE_URL ||
        "https://email-service.digitalenvision.com.au",
});
exports.default = emailService;
