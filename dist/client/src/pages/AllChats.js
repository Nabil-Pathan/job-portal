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
const react_redux_1 = require("react-redux");
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
const react_router_dom_1 = require("react-router-dom");
const AllChats = () => {
    const user = (0, react_redux_1.useSelector)((state) => state.user.user);
    const [users, setUsers] = (0, react_1.useState)();
    const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user === null || user === void 0 ? void 0 : user.token}`
                }
            };
            const { data } = yield axios_1.default.get('/api/chat/get-all-chats', config);
            setUsers(data.allUsers);
        }
        catch (error) {
            console.log(error);
        }
    });
    (0, react_1.useEffect)(() => {
        fetchUsers();
    }, [users]);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: "container bg-white h-screen mx-auto px-4 py-6", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-3xl font-bold text-center", children: "Recent Chats" }), (0, jsx_runtime_1.jsx)("div", { className: "flex mt-8 flex-col", children: users === null || users === void 0 ? void 0 : users.map((user) => ((0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { to: `/chat/${user._id}`, className: "flex border px-4 py-3 border-gray-300 items-center gap-6 transition duration-300 cursor-pointer ", children: [(0, jsx_runtime_1.jsx)("img", { className: "h-[40px] w-[40px] rounded-full", src: user.pic, alt: "pic" }), (0, jsx_runtime_1.jsx)("h1", { className: "text-xl font-medium", children: user.name })] }, user._id))) })] }) }));
};
exports.default = AllChats;
