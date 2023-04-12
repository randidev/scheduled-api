"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserSchema = exports.UpdateUserSchema = exports.AddUserSchema = void 0;
const yup_1 = require("yup");
exports.AddUserSchema = (0, yup_1.object)({
    timezone: (0, yup_1.string)().required(),
    location: (0, yup_1.string)().required(),
    birthdayDate: (0, yup_1.date)().required(),
    email: (0, yup_1.string)().required(),
    firstname: (0, yup_1.string)().required(),
    lastname: (0, yup_1.string)().required(),
});
exports.UpdateUserSchema = (0, yup_1.object)({
    timezone: (0, yup_1.string)().required(),
    location: (0, yup_1.string)().required(),
    birthdayDate: (0, yup_1.date)().required(),
    firstname: (0, yup_1.string)().required(),
    email: (0, yup_1.string)().required(),
    lastname: (0, yup_1.string)().required(),
    id: (0, yup_1.string)().required(),
});
exports.DeleteUserSchema = (0, yup_1.object)({
    id: (0, yup_1.string)().required(),
});
