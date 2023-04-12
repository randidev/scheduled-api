"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MESSAGES = void 0;
exports.MESSAGES = {
    GET_USER: {
        ERROR: {
            SERVER: "Some error occurred while retrieving users.",
        },
    },
    CREATE_USER: {
        SUCCESS: "Successfully add new user",
        ERROR: {
            EMAIL_EXIST: "Sorry, user with that email address already exist.",
        },
    },
    UPDATE_USER: {
        SUCCESS: "User's data successfully updated.",
    },
    DELETE_USER: {
        SUCCESS: "Successfully delete user",
    },
};
