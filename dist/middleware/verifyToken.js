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
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userSchema_1 = __importDefault(require("../models/userSchema"));
const verifyToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            return res.json({ error: "You must be logged in" }).status(401);
        }
        const token = authorization === null || authorization === void 0 ? void 0 : authorization.replace("Bearer ", "");
        const decodedToken = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        const user = yield userSchema_1.default.findById(decodedToken.id);
        if (!user) {
            return res.json({ error: "You must be logged in" }).status(401);
        }
        req.user = user;
        next();
    }
    catch (error) {
        console.log(error.message);
        return res.json({ error: "Inernal Server error" }).status(500);
    }
});
exports.verifyToken = verifyToken;
