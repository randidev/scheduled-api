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
exports.deleteEmailLog = exports.getEmailLogDetail = exports.addEmailLog = exports.sendEmail = void 0;
const email_1 = __importDefault(require("../../instances/email"));
const internal_1 = __importDefault(require("../../instances/internal"));
const sendEmail = (user) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, email_1.default)({
        url: "/send-email",
        method: "POST",
        maxBodyLength: Infinity,
        headers: {
            accept: "application/json",
            "Content-Type": "application/json",
        },
        data: {
            email: user.email,
            message: `Hey, ${user.firstname} ${user.lastname} it’s your birthday.`,
        },
    });
});
exports.sendEmail = sendEmail;
const addEmailLog = (token, payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, internal_1.default)({
        url: "/email-log",
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        data: {
            userId: payload.userId,
            status: payload.status,
        },
    });
});
exports.addEmailLog = addEmailLog;
const getEmailLogDetail = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, internal_1.default)({
        url: `/email-log/${userId}`,
        method: "GET",
    });
});
exports.getEmailLogDetail = getEmailLogDetail;
const deleteEmailLog = (token, id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, internal_1.default)({
        url: `/email-log/${id}`,
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
});
exports.deleteEmailLog = deleteEmailLog;
