"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toolkit_1 = require("@reduxjs/toolkit");
const userslice_1 = __importDefault(require("./userslice")); // Path to your user slice file
const store = (0, toolkit_1.configureStore)({
    reducer: {
        user: userslice_1.default,
    },
});
exports.default = store;
