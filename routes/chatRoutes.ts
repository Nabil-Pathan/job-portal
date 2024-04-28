import express from "express"
import { verifyToken } from "../middleware/verifyToken"
import { accessChatController, allMessagesController, fetchChat, getUserChats, sendMessageController } from "../controllers/chatControllers"

const router = express.Router()

router.post('/access-chat', verifyToken,  accessChatController)
router.get('/fetch-chat', verifyToken,  fetchChat)
router.get('/get-all-chats', verifyToken,  getUserChats)
router.post('/send-message', verifyToken , sendMessageController)
router.get('/all-messages/:chatId', verifyToken , allMessagesController)


export default router