import { Request, Response } from "express"
import Chat, { ChatDocument } from "../models/chatSchema";
import User from "../models/userSchema";
import Message from "../models/messageSchema";


export const accessChatController = async (req: Request | any, res: Response) => {

    try {
        const { userId } = req.body

        if (!userId) {
            return res.sendStatus(400);
        }

        let isChat : ChatDocument[] = await Chat.find({
            users: {
                $all: [req.user._id, userId],
              },
        }).populate("users","-password")
        .populate("latestMessage");

        const populatedChat = await User.populate(isChat , {
            path: 'latestMessage.sender',
            select: "name pic email",
        })

        if(isChat.length > 0){
            res.status(200).send(isChat[0]);
        }

        else{
            var chatData = {
                chatName: "sender",
                users: [req.user._id , userId]
            }

            try {
                const createdChat = await Chat.create(chatData)
   
                const fullChat = await Chat.findOne({_id : createdChat._id}).populate("users", "-password")
   
                res.status(200).send(fullChat)
           } catch (error : any) {
               console.log(error.message);
           }
        }
    } catch (error: any) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server error" });
    }
}

export const fetchChat = async (req: Request | any, res: Response) => {
    try {
        const results = await Chat.find({ users : { $elemMatch : { $eq : req.user._id} }})
        .populate("users", "-password")
        .populate('groupAdmin', '-password')
        .populate('latestMessage')
        .sort({ updatedAt: -1 });

        const populatedResults = await User.populate(results, {
            path: 'latestMessage.sender',
            select: 'name pic email',
          });

          res.status(200).send(populatedResults).status(200)

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server error" });
    }
}

export const sendMessageController = async (req: Request | any, res: Response) => {
    try {
        const { chatId , content } = req.body

        if(!content || !chatId){
            console.log("Invalid data passed into request");
            return res.status(400).json({ error : "Provide All Details"})
        }

        var newMessage = {
            sender: req.user._id,
            content: content,
            chat : chatId
        }

        var message = await Message.create(newMessage)

        message = await message.populate("sender", "name")
        message = await message.populate("chat")

        const createdMessage = await User.populate(message ,{
            path:'chat.users',
            select: 'name email pic'
        })

        await Chat.findByIdAndUpdate(req.body.chatId , {
            latestMessage : createdMessage
        })

        res.json(createdMessage).status(200)
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server error" });
    }
}

export const allMessagesController = async (req: Request, res: Response) => {
    try {
        const messages = await Message.find({chat : req.params.chatId}).populate("sender","name email pic").populate("chat")
        return res.json({messages}).status(200)
    } catch (error:any) {
         console.log("From All Messages",error.message);
        return res.status(500).json({ error : "Internal Server Error"})
    }
}

export const getUserChats = async (req : Request | any, res : Response)=>{
    try {
         const userId = req.user._id

         const chats = await Chat.find({users : { $elemMatch : { $eq : userId}}})
         .populate('users', 'name email pic')
            .exec();

            const allUsers = chats.reduce((users: any[], chat: any) => {
                chat.users.forEach((user: any) => {
                    if (user._id.toString() !== userId.toString() && !users.some(u => u._id.toString() === user._id.toString())) {
                        users.push(user);
                    }
                });
                return users;
            }, []);
    


         return res.json({allUsers}).status(200)
         
    } catch (error : any) {
        console.log("From All Messages",error.message);
        return res.status(500).json({ error : "Internal Server Error"})
    }
}