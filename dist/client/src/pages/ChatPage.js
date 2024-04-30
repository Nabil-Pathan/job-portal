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
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
const react_redux_1 = require("react-redux");
const socket_io_client_1 = __importDefault(require("socket.io-client"));
const react_router_dom_1 = require("react-router-dom");
const react_router_dom_2 = require("react-router-dom");
const Loader_1 = __importDefault(require("../components/Extra/Loader"));
const ENDPOINT = "http://44.207.204.68:5000";
const socket = (0, socket_io_client_1.default)(ENDPOINT);
const ChatPage = () => {
    const navigate = (0, react_router_dom_2.useNavigate)();
    const params = (0, react_router_dom_1.useParams)();
    const selectedUserId = params.userId;
    const user = (0, react_redux_1.useSelector)((state) => state.user.user);
    const [messages, setMessages] = (0, react_1.useState)([]);
    const [newMessage, setNewMessage] = (0, react_1.useState)('');
    const [chatId, setChatId] = (0, react_1.useState)('');
    const [chatUser, setChatUser] = (0, react_1.useState)();
    const [loading, setLoading] = (0, react_1.useState)(false);
    const fetchChat = () => __awaiter(void 0, void 0, void 0, function* () {
        setLoading(true);
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user === null || user === void 0 ? void 0 : user.token}`,
                },
            };
            const { data } = yield axios_1.default.post(`/api/chat/access-chat`, { userId: selectedUserId }, config);
            setChatId(data._id);
            const matchedUser = data.users.find((user) => user._id === selectedUserId);
            if (matchedUser) {
                setChatUser(matchedUser);
            }
            setLoading(false);
        }
        catch (error) {
            console.log(error.message);
            setLoading(false);
        }
    });
    const sendMessage = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user === null || user === void 0 ? void 0 : user.token}`,
                },
            };
            const { data } = yield axios_1.default.post('/api/chat/send-message', {
                chatId: chatId,
                content: newMessage,
            }, config);
            socket.emit("new-message", data);
            setMessages((prevMessages) => [...prevMessages, data]);
            setNewMessage('');
        }
        catch (error) {
            console.log(error.message);
        }
    });
    const fetchMessages = () => __awaiter(void 0, void 0, void 0, function* () {
        setLoading(true);
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user === null || user === void 0 ? void 0 : user.token}`,
                },
            };
            const { data } = yield axios_1.default.get(`/api/chat/all-messages/${chatId}`, config);
            setMessages(data.messages);
            setLoading(false);
        }
        catch (error) {
            setLoading(false);
            console.log(error.message);
        }
    });
    (0, react_1.useEffect)(() => {
        if (selectedUserId !== '' && selectedUserId !== null) {
            fetchChat();
        }
        if (chatId !== '' && chatId !== null) {
            fetchMessages();
        }
        if (socket && chatId) {
            socket.emit('setup', { _id: user === null || user === void 0 ? void 0 : user._id });
            socket.emit('join-chat', chatId);
        }
    }, [socket, selectedUserId, chatId]);
    (0, react_1.useEffect)(() => {
        socket.on('message received', (newMessageReceived) => {
            setMessages((prevMessages) => [...prevMessages, newMessageReceived]);
        });
        return () => {
            socket.off('message received');
        };
    }, [socket, messages]);
    (0, react_1.useEffect)(() => {
        const chatContainer = document.getElementById('chat-container');
        if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    }, [messages]);
    const sentMessageClasses = 'max-w-3/4 mb-4 p-4 rounded bg-gray-800 text-white';
    const receivedMessageClasses = 'max-w-3/4 mb-4 p-4 rounded bg-gray-300';
    const handleNavigate = () => {
        navigate('/');
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: "w-full h-screen flex flex-col", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-4 p-4 bg-gray-800 text-white sticky top-0", children: [(0, jsx_runtime_1.jsx)("button", { className: 'border border-gray-300 shadow-md px-4 py-3 rounded-md', onClick: handleNavigate, children: (0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 2.5, stroke: "currentColor", className: "w-6 h-6", children: (0, jsx_runtime_1.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" }) }) }), chatUser &&
                            (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("img", { src: chatUser.pic, className: 'w-9 h-9 object-cover rounded-full', alt: "profile" }), (0, jsx_runtime_1.jsx)("h2", { className: "text-2xl font-bold", children: chatUser.name })] })] }), loading ? ((0, jsx_runtime_1.jsx)(Loader_1.default, {})) : ((0, jsx_runtime_1.jsx)("div", { id: "chat-container", className: "flex-1 w-full bg-gray-100 overflow-y-auto p-4", style: { scrollBehavior: 'auto' }, children: messages.map((message, index) => ((0, jsx_runtime_1.jsx)("div", { className: `flex items-end ${message.sender._id === (user === null || user === void 0 ? void 0 : user._id) ? 'justify-end' : 'justify-start'}`, children: (0, jsx_runtime_1.jsx)("div", { className: message.sender._id === (user === null || user === void 0 ? void 0 : user._id) ? sentMessageClasses : receivedMessageClasses, children: message.content }) }, index))) })), (0, jsx_runtime_1.jsxs)("div", { className: " flex items-center justify-center  sticky bottom-0", children: [(0, jsx_runtime_1.jsx)("input", { type: "text", placeholder: "Type your message...", value: newMessage, onChange: (e) => setNewMessage(e.target.value), className: "flex-1 rounded-md outline-none p-4 " }), (0, jsx_runtime_1.jsx)("button", { onClick: sendMessage, className: "bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded", children: (0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: "w-7 h-7", children: (0, jsx_runtime_1.jsx)("path", { d: "M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" }) }) })] })] }) }));
};
exports.default = ChatPage;
