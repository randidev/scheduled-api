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
const mongodb_1 = require("../../database/mongodb");
const internal_1 = require("../../services/internal");
const user_1 = __importDefault(require("../../models/user"));
const messages_1 = require("../../controllers/user/config/messages");
describe("test the recipes API", () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, mongodb_1.mongoConnect)();
        const user = {
            firstname: "Randi",
            lastname: "Faturrakhman",
            email: "randifaturrakhman09@gmail.com",
            birthdayDate: "09-10-2000",
            location: "id",
            timezone: "ETC/GMT+5",
        };
        yield user_1.default.create(user);
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield user_1.default.deleteMany();
        mongoose_1.default.disconnect();
    }));
    //test get users
    describe("GET/users", () => {
        it("should retrieve all of the users", () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield (0, internal_1.getUsers)();
            expect(res.status).toEqual(200);
            expect(res.data).toEqual(expect.objectContaining({
                success: true,
                data: expect.any(Object),
            }));
        }));
    });
    describe("POST/users", () => {
        it("should save user to db", () => __awaiter(void 0, void 0, void 0, function* () {
            const user = {
                firstname: "Randi",
                lastname: "Faturrakhman",
                email: "randifaturrakhman09+new@gmail.com",
                birthdayDate: new Date("09-10-2000"),
                location: "id",
                timezone: "ETC/GMT+5",
            };
            const resToken = yield (0, internal_1.getToken)();
            expect(resToken.status).toEqual(200);
            expect(resToken.data).toEqual(expect.objectContaining({
                token: resToken.data.token,
                success: true,
            }));
            const res = yield (0, internal_1.addUser)(user, resToken.data.token);
            expect(res.status).toEqual(200);
            expect(res.data).toEqual(expect.objectContaining({
                success: true,
                message: messages_1.MESSAGES.CREATE_USER.SUCCESS,
            }));
        }));
    });
});
