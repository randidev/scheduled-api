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
const BirthdayEmail = require("./src/jobs/birthdayEmail/index");
const initApp = require("./index");
var cron = require("node-cron");
const app = initApp();
// Start server
// run BirthdayEmail job each hour
cron.schedule("0 0 * * * *", () => __awaiter(void 0, void 0, void 0, function* () {
    yield BirthdayEmail();
}));
const port = process.env.PORT || 3003;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
