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
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const ApplicationComponent_1 = __importDefault(require("../components/Extra/ApplicationComponent"));
const AllJobApplications = () => {
    const user = (0, react_redux_1.useSelector)((state) => state.user.user);
    const [applications, setApplications] = (0, react_1.useState)();
    const params = (0, react_router_dom_1.useParams)();
    const fetchApplications = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user === null || user === void 0 ? void 0 : user.token}`
                }
            };
            const { data } = yield axios_1.default.get(`/api/job/get-job-applications/${params.jobId}`, config);
            setApplications(data.applications);
        }
        catch (error) {
            console.log(error.message);
        }
    });
    (0, react_1.useEffect)(() => {
        fetchApplications();
    }, []);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: applications && (applications === null || applications === void 0 ? void 0 : applications.length) < 1 ? ((0, jsx_runtime_1.jsx)("div", { className: "h-screen flex flex-col items-center justify-center", children: (0, jsx_runtime_1.jsx)("h1", { className: "text-3xl font-semibold", children: "No Applications Yet" }) })) : ((0, jsx_runtime_1.jsx)("div", { className: "overflow-x-auto", children: (0, jsx_runtime_1.jsxs)("table", { className: "min-w-full bg-white", children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { className: "px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider", children: "Name" }), (0, jsx_runtime_1.jsx)("th", { className: "px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider", children: "Email" }), (0, jsx_runtime_1.jsx)("th", { className: "px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider", children: "Role" }), (0, jsx_runtime_1.jsx)("th", { className: "px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider", children: "Experience" }), (0, jsx_runtime_1.jsx)("th", { className: "px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider", children: "Resume" }), (0, jsx_runtime_1.jsx)("th", { className: "px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider", children: "Cover Letter" })] }) }), (0, jsx_runtime_1.jsx)("tbody", { className: "bg-white divide-y divide-gray-200", children: applications === null || applications === void 0 ? void 0 : applications.map((application) => ((0, jsx_runtime_1.jsx)(ApplicationComponent_1.default, { application: application }))) })] }) })) }));
};
exports.default = AllJobApplications;
