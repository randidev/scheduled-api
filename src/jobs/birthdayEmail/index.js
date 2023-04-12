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
const mongoose_1 = __importDefault(require("mongoose"));
const email_1 = require("../../services/email");
const internal_1 = require("../../services/internal");
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const BirthdayEmail = () => __awaiter(void 0, void 0, void 0, function* () {
    const resToken = yield (0, internal_1.getToken)();
    const { token } = resToken.data;
    const resUsers = yield (0, internal_1.getUsers)();
    const users = resUsers.data;
    users.data.forEach((user) => __awaiter(void 0, void 0, void 0, function* () {
        const getLog = yield (0, email_1.getEmailLogDetail)(user._id);
        // check if it's already 9am based on their timezone or if there's any pending message
        // then it will send a message to the user
        if ((0, moment_timezone_1.default)().tz(user.timezone).format("h") === "9" ||
            (getLog && getLog.data.status === false)) {
            try {
                const idUser = new mongoose_1.default.Types.ObjectId(user._id);
                let addLog = getLog && getLog.data.status === false ? { data: getLog.data } : null;
                // if there isn't any log yet
                // then insert one for this particular user
                if (!getLog)
                    yield (0, email_1.addEmailLog)(token, {
                        userId: idUser,
                        status: false,
                    });
                const sendingEmail = yield (0, email_1.sendEmail)(user);
                // deleting log if email service returning 200
                if (sendingEmail.status === 200 && addLog !== null)
                    yield (0, email_1.deleteEmailLog)(token, addLog === null || addLog === void 0 ? void 0 : addLog.data.id);
            }
            catch (error) {
                console.log(error.message);
            }
        }
    }));
});
module.exports = BirthdayEmail;
