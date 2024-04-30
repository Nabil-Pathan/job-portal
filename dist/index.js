"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const connection_1 = require("./db/connection");
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const jobRoutes_1 = __importDefault(require("./routes/jobRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const chatRoutes_1 = __importDefault(require("./routes/chatRoutes"));
const path_1 = __importDefault(require("path"));
const socket_io_1 = require("socket.io");
const http_1 = __importDefault(require("http"));
dotenv_1.default.config();
const Port = process.env.PORT;
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
let io = new socket_io_1.Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    }
});
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api/auth', authRoutes_1.default);
app.use('/api/job', jobRoutes_1.default);
app.use('/api/user', userRoutes_1.default);
app.use('/api/chat', chatRoutes_1.default);
const __dirname1 = path_1.default.resolve();
if (process.env.NODE_ENV === "production") {
    app.use(express_1.default.static(path_1.default.join(__dirname1, "/client/dist")));
    app.get('*', (req, res) => {
        res.sendFile(path_1.default.resolve(__dirname1, "client", "dist", "index.html"));
    });
}
io.on("connection", (socket) => {
    console.log(`User Connected ${socket.id}`);
    socket.on("setup", (userdata) => {
        socket.join(userdata._id);
        // console.log(userdata._id);
        socket.emit("connected");
    });
    socket.on("join-chat", (room) => {
        socket.join(room);
        // console.log(`User Joined room : ${room}`);
    });
    socket.on('new-message', (newMessageRecieved) => {
        console.log(newMessageRecieved);
        var chat = newMessageRecieved.chat;
        console.log("Chat", chat);
        if (!chat.users)
            return console.log('chat.users not defined');
        // console.log(chat.users);
        chat.users.forEach(user => {
            if (user._id === newMessageRecieved.sender._id) {
                return;
            }
            io.to(user._id).emit("message received", newMessageRecieved);
        });
    });
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});
connection_1.connection.once('open', () => {
    console.log('Connected to Database');
});
server.listen(Port, () => {
    console.log(`Listening on Port ${Port}`);
});
