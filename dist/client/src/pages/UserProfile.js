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
const react_router_dom_1 = require("react-router-dom");
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
const UserProfile = () => {
    const params = (0, react_router_dom_1.useParams)();
    const user = (0, react_redux_1.useSelector)((state) => state.user.user);
    const [userProfile, setUserProfile] = (0, react_1.useState)();
    const fetchUserProfile = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user === null || user === void 0 ? void 0 : user.token}`
                }
            };
            const { data } = yield axios_1.default.get(`/api/user/get-user-profile/${params.userId}`, config);
            setUserProfile(data.user);
        }
        catch (error) {
            console.log(error.message);
        }
    });
    (0, react_1.useEffect)(() => {
        fetchUserProfile();
    }, []);
    return ((0, jsx_runtime_1.jsx)("div", { className: "container mx-auto", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center py-6 justify-center flex-col", children: [(0, jsx_runtime_1.jsx)("img", { className: "md:h-[300px] h-[200px] md:w-[300px] w-[200px] object-cover rounded-full cursor-pointer", src: userProfile === null || userProfile === void 0 ? void 0 : userProfile.pic, alt: "" }), (0, jsx_runtime_1.jsx)("h1", { className: "mt-6 text-4xl font-semibold", children: userProfile === null || userProfile === void 0 ? void 0 : userProfile.name }), (0, jsx_runtime_1.jsx)("p", { children: userProfile === null || userProfile === void 0 ? void 0 : userProfile.email }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: `/chat/${userProfile === null || userProfile === void 0 ? void 0 : userProfile._id}`, children: (0, jsx_runtime_1.jsx)("button", { className: "bg-blue-500 text-white font-bold px-4 py-3 rounded-md mt-4", children: "Message" }) })] }) }));
};
exports.default = UserProfile;
