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
exports.rateLimitter = void 0;
const redis_1 = __importDefault(require("../db/redis"));
const rateLimitter = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ipAddress = req.ip;
        const key = `rate-limit:${ipAddress}`;
        const count = yield redis_1.default.incr(key);
        if (count > 5) {
            return res.status(429).json({ error: 'Rate limit exceeded. Try again later.' });
        }
        if (count === 1) {
            yield redis_1.default.expire(key, 60); // Set expiration to 60 seconds
        }
        next();
    }
    catch (error) {
        console.log(error.message);
        return res.json({ error: "Internal Server Error" }).status(500);
    }
});
exports.rateLimitter = rateLimitter;
