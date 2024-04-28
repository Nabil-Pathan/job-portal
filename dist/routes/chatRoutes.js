"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const verifyToken_1 = require("../middleware/verifyToken");
const chatControllers_1 = require("../controllers/chatControllers");
const router = express_1.default.Router();
router.post('/access-chat', verifyToken_1.verifyToken, chatControllers_1.accessChatController);
router.get('/fetch-chat', verifyToken_1.verifyToken, chatControllers_1.fetchChat);
router.get('/get-all-chats', verifyToken_1.verifyToken, chatControllers_1.getUserChats);
router.post('/send-message', verifyToken_1.verifyToken, chatControllers_1.sendMessageController);
router.get('/all-messages/:chatId', verifyToken_1.verifyToken, chatControllers_1.allMessagesController);
exports.default = router;
