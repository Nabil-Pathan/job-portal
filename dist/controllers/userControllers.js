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
exports.getAllAppliedJobs = exports.getResumeController = exports.CreateResumeController = exports.getCreatedJobs = exports.UpdateProfileController = void 0;
const userSchema_1 = __importDefault(require("../models/userSchema"));
const jobSchema_1 = __importDefault(require("../models/jobSchema"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const html_pdf_1 = __importDefault(require("html-pdf"));
const index_1 = __importDefault(require("../pdf-sample/index"));
const UpdateProfileController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        const user = yield userSchema_1.default.findById(userId);
        let { name, email, password, pic } = req.body;
        if (!user) {
            return res.json({ error: "User Not Found" }).status(404);
        }
        if (user._id.toString() !== userId.toString()) {
            return res.json({ error: "Cannot Update Profile" }).status(401);
        }
        // Only hash the password if it is provided
        if (password !== "") {
            password = yield bcryptjs_1.default.hash(password, 10);
        }
        else {
            // If password is not provided, remove it from the update object
            password = undefined;
        }
        const updateObject = {
            name: name,
            email: email,
            pic: pic,
        };
        if (password !== undefined) {
            updateObject.password = password;
        }
        const updateProfile = yield userSchema_1.default.findByIdAndUpdate(userId, {
            $set: updateObject,
        }, { new: true });
        updateProfile === null || updateProfile === void 0 ? void 0 : updateProfile.save();
        const token = jsonwebtoken_1.default.sign({ id: updateProfile === null || updateProfile === void 0 ? void 0 : updateProfile._id }, process.env.JWT_SECRET);
        res.status(200).json({ message: "User Updated", user: updateProfile, token });
    }
    catch (error) {
        console.log(error.message);
        return res.json({ error: "Internal Server Error" }).status(500);
    }
});
exports.UpdateProfileController = UpdateProfileController;
const getCreatedJobs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user._id;
        const user = yield userSchema_1.default.findById(userId);
        if (!user) {
            return res.json({ error: "User Not Found" }).status(404);
        }
        const jobs = yield jobSchema_1.default.find({ postedBy: userId });
        return res.json({ jobs }).status(200);
    }
    catch (error) {
        console.log(error.message);
        return res.json({ error: "Internal Server Error" }).status(500);
    }
});
exports.getCreatedJobs = getCreatedJobs;
const CreateResumeController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        html_pdf_1.default.create((0, index_1.default)(req.body), {}).toFile("Resume.pdf", (err) => {
            if (err) {
                res.send(Promise.reject());
                console.log(err);
            }
            res.send(Promise.resolve());
            console.log("Success");
        });
    }
    catch (error) {
        console.log(error);
        return res.json({ error: "Internal Server Error" }).status(500);
    }
});
exports.CreateResumeController = CreateResumeController;
const getResumeController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.sendFile("Resume.pdf", { root: "." });
    }
    catch (error) {
        console.log(error);
        return res.json({ error: "Internal Server Error" }).status(500);
    }
});
exports.getResumeController = getResumeController;
const getAllAppliedJobs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user._id;
        const requestinguser = yield userSchema_1.default.findById(userId);
        if (!requestinguser) {
            return res.json({ error: "User Not Found" }).status(404);
        }
        const applications = yield jobSchema_1.default.find({ "applicants.user": userId });
        return res.json({ applications }).status(200);
    }
    catch (error) {
        console.log(error);
        return res.json({ error: "Internal Server Error" }).status(500);
    }
});
exports.getAllAppliedJobs = getAllAppliedJobs;
