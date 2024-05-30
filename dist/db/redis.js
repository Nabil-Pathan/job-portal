"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis_1 = __importDefault(require("ioredis"));
const redis = new ioredis_1.default({
    host: 'redis-17171.c264.ap-south-1-1.ec2.redns.redis-cloud.com',
    password: 'MLrSR5ERlMlJp05itfcM3FFRSP3Rfxke',
    port: 17171
});
exports.default = redis;
