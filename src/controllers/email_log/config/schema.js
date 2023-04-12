"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddLogSchema = void 0;
const yup_1 = require("yup");
exports.AddLogSchema = (0, yup_1.object)({
    userId: (0, yup_1.string)().required(),
    status: (0, yup_1.boolean)().required(),
});
