"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("./src/database/mongodb");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const initializeApp = () => {
    dotenv.config();
    const app = express();
    // Middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());
    // Database connection
    (0, mongodb_1.mongoConnect)();
    // Routes
    const routes = require("./routes");
    app.use("/", routes);
    return app;
};
module.exports = initializeApp;
