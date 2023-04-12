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
Object.defineProperty(exports, "__esModule", { value: true });
const internal_1 = require("../../services/internal");
describe("test the recipes API", () => {
    describe("GET/token", () => {
        it("get token", () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield (0, internal_1.getToken)();
            const token = res.data.token;
            expect(res.status).toEqual(200);
            expect(res.data).toEqual(expect.objectContaining({
                token: token,
                success: true,
            }));
        }));
    });
});
