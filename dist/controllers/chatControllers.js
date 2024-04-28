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
exports.getUserChats = exports.allMessagesController = exports.sendMessageController = exports.fetchChat = exports.accessChatController = void 0;
const chatSchema_1 = __importDefault(require("../models/chatSchema"));
const userSchema_1 = __importDefault(require("../models/userSchema"));
const messageSchema_1 = __importDefault(require("../models/messageSchema"));
const accessChatController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.body;
        if (!userId) {
            return res.sendStatus(400);
        }
        let isChat = yield chatSchema_1.default.find({
            users: {
                $all: [req.user._id, userId],
            },
        }).populate("users", "-password")
            .populate("latestMessage");
        const populatedChat = yield userSchema_1.default.populate(isChat, {
            path: 'latestMessage.sender',
            select: "name pic email",
        });
        if (isChat.length > 0) {
            res.status(200).send(isChat[0]);
        }
        else {
            var chatData = {
                chatName: "sender",
                users: [req.user._id, userId]
            };
            try {
                const createdChat = yield chatSchema_1.default.create(chatData);
                const fullChat = yield chatSchema_1.default.findOne({ _id: createdChat._id }).populate("users", "-password");
                res.status(200).send(fullChat);
            }
            catch (error) {
                console.log(error.message);
            }
        }
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server error" });
    }
});
exports.accessChatController = accessChatController;
const fetchChat = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield chatSchema_1.default.find({ users: { $elemMatch: { $eq: req.user._id } } })
            .populate("users", "-password")
            .populate('groupAdmin', '-password')
            .populate('latestMessage')
            .sort({ updatedAt: -1 });
        const populatedResults = yield userSchema_1.default.populate(results, {
            path: 'latestMessage.sender',
            select: 'name pic email',
        });
        res.status(200).send(populatedResults).status(200);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server error" });
    }
});
exports.fetchChat = fetchChat;
const sendMessageController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { chatId, content } = req.body;
        if (!content || !chatId) {
            console.log("Invalid data passed into request");
            return res.status(400).json({ error: "Provide All Details" });
        }
        var newMessage = {
            sender: req.user._id,
            content: content,
            chat: chatId
        };
        var message = yield messageSchema_1.default.create(newMessage);
        message = yield message.populate("sender", "name");
        message = yield message.populate("chat");
        const createdMessage = yield userSchema_1.default.populate(message, {
            path: 'chat.users',
            select: 'name email pic'
        });
        yield chatSchema_1.default.findByIdAndUpdate(req.body.chatId, {
            latestMessage: createdMessage
        });
        res.json(createdMessage).status(200);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server error" });
    }
});
exports.sendMessageController = sendMessageController;
const allMessagesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const messages = yield messageSchema_1.default.find({ chat: req.params.chatId }).populate("sender", "name email pic").populate("chat");
        return res.json({ messages }).status(200);
    }
    catch (error) {
        console.log("From All Messages", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.allMessagesController = allMessagesController;
const getUserChats = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user._id;
        const chats = yield chatSchema_1.default.find({ users: { $elemMatch: { $eq: userId } } })
            .populate('users', 'name email pic')
            .exec();
        const allUsers = chats.reduce((users, chat) => {
            chat.users.forEach((user) => {
                if (user._id.toString() !== userId.toString() && !users.some(u => u._id.toString() === user._id.toString())) {
                    users.push(user);
                }
            });
            return users;
        }, []);
        return res.json({ allUsers }).status(200);
    }
    catch (error) {
        console.log("From All Messages", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.getUserChats = getUserChats;
