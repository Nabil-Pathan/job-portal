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
exports.GoogleAuthController = exports.Signincontroller = exports.Signupcontroller = void 0;
const userSchema_1 = __importDefault(require("../models/userSchema"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Signupcontroller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password, pic } = req.body;
        if (!name || !email || !password) {
            return res.json({ message: "Please Provide All the Details" }).status(400);
        }
        const user = yield userSchema_1.default.findOne({ email });
        if (user) {
            return res.json({ message: "User Already Exist" }).status(400);
        }
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const newUser = yield userSchema_1.default.create({ name, email, password: hashedPassword, pic });
        const token = yield jsonwebtoken_1.default.sign({ id: newUser._id }, process.env.JWT_SECRET);
        return res.json({ message: "Registration Successful", user: newUser, token }).status(201);
    }
    catch (error) {
        console.log(error.message);
        return res.json({ message: "Internal Sever Error" }).status(500);
    }
});
exports.Signupcontroller = Signupcontroller;
const Signincontroller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.json({ message: "Please Provide All the Details" }).status(400);
        }
        const user = yield userSchema_1.default.findOne({ email });
        if (!user) {
            return res.json({ message: "User does not Exist" }).status(400);
        }
        const comparePassword = yield bcrypt_1.default.compare(password, user.password);
        if (!comparePassword) {
            return res.json({ message: "Invalid Credentials" }).status(400);
        }
        const token = yield jsonwebtoken_1.default.sign({ id: user._id }, process.env.JWT_SECRET);
        return res.json({ message: "Login Successful", user, token }).status(201);
    }
    catch (error) {
        console.log(error.message);
        return res.json({ message: "Internal Sever Error" }).status(500);
    }
});
exports.Signincontroller = Signincontroller;
const GoogleAuthController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = req.body;
        const user = yield userSchema_1.default.findOne({ email: result.email });
        if (user) {
            // Login User
            const token = jsonwebtoken_1.default.sign({ id: user._id }, process.env.JWT_SECRET);
            return res.json({ message: "Login Successful", user, token });
        }
        else {
            // Register User
            const generatePassword = Math.random().toString(36).slice(-8);
            const hashedPassword = yield bcrypt_1.default.hash(generatePassword, 10);
            const newUser = yield new userSchema_1.default({ name: result.displayName.split(" ").join("").toLowerCase() + Math.random().toString(36).slice(-4), email: result.email, password: hashedPassword, pic: result.photoURL });
            yield newUser.save();
            const token = jsonwebtoken_1.default.sign({ id: newUser._id }, process.env.JWT_SECRET);
            return res.json({ message: "Registration Successful", user: newUser, token });
        }
    }
    catch (error) {
        console.log(error.message);
        return res.json({ message: "Internal Sever Error" }).status(500);
    }
});
exports.GoogleAuthController = GoogleAuthController;
