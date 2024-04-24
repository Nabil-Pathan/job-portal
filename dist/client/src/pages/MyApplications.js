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
const MyApplications = () => {
    const user = (0, react_redux_1.useSelector)((state) => state.user.user);
    const [applications, setApplications] = (0, react_1.useState)();
    const fetchApplications = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user === null || user === void 0 ? void 0 : user.token}`,
                },
            };
            const { data } = yield axios_1.default.get("/api/user/get-applied-jobs", config);
            console.log(data);
            setApplications(data.applications);
        }
        catch (error) {
            console.log(error.message);
        }
    });
    (0, react_1.useEffect)(() => {
        fetchApplications();
    }, []);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: "container mx-auto md:p-6 p-2", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-3xl text-center font-bold mb-4", children: "My Applications" }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 mt-4 gap-4 md:grid-cols-2 lg:grid-cols-3", children: applications === null || applications === void 0 ? void 0 : applications.map((application) => ((0, jsx_runtime_1.jsxs)("div", { className: "border p-4 rounded-lg custom-shadow-1", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-lg font-semibold", children: application.title }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-500", children: application.company }), (0, jsx_runtime_1.jsx)("p", { className: "mt-2", children: application.description }), (0, jsx_runtime_1.jsxs)("p", { className: "mt-4", children: [(0, jsx_runtime_1.jsx)("strong", { children: "Location:" }), " ", application.location] }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "Salary:" }), " $", application.salary] })] }, application._id))) })] }) }));
};
exports.default = MyApplications;
