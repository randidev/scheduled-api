"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoConnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoConnect = () => {
    if (mongoose_1.default.connections[0].readyState) {
        // if connection is open return the instance of the database for cleaner queries
        return mongoose_1.default.connection.db;
    }
    return mongoose_1.default
        .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/scheduled-api-test", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
        // console.log("Database Connected");
    });
};
exports.mongoConnect = mongoConnect;
