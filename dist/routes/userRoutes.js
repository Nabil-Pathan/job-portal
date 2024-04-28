"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userControllers_1 = require("../controllers/userControllers");
const verifyToken_1 = require("../middleware/verifyToken");
const router = express_1.default.Router();
router.post('/update-profile/:userId', verifyToken_1.verifyToken, userControllers_1.UpdateProfileController);
router.get('/get-user-profile/:userId', verifyToken_1.verifyToken, userControllers_1.getUserProfile);
router.get('/get-created-jobs/:userId', verifyToken_1.verifyToken, userControllers_1.getCreatedJobs);
router.post('/create-resume', verifyToken_1.verifyToken, userControllers_1.CreateResumeController);
router.get('/fetch-pdf', userControllers_1.getResumeController);
router.get('/get-applied-jobs', verifyToken_1.verifyToken, userControllers_1.getAllAppliedJobs);
exports.default = router;
