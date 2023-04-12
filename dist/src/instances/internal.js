"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const internalApi = axios_1.default.create({
    baseURL: process.env.BASE_URL || "http://localhost:3003",
});
exports.default = internalApi;
