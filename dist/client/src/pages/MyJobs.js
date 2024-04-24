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
const axios_1 = __importDefault(require("axios"));
const react_redux_1 = require("react-redux");
const react_1 = require("react");
const MyJob_1 = __importDefault(require("../components/Extra/MyJob"));
const Loader_1 = __importDefault(require("../components/Extra/Loader"));
const MyJobs = () => {
    const [jobs, setJobs] = (0, react_1.useState)();
    const [loading, setLoading] = (0, react_1.useState)(false);
    const user = (0, react_redux_1.useSelector)((state) => state.user.user);
    const fetchJobs = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            setLoading(true);
            const config = {
                headers: {
                    Authorization: `Bearer ${user === null || user === void 0 ? void 0 : user.token}`
                }
            };
            const { data } = yield axios_1.default.get(`/api/user/get-created-jobs/${user === null || user === void 0 ? void 0 : user._id}`, config);
            setJobs(data.jobs);
            setLoading(false);
        }
        catch (error) {
            console.log(error.message);
        }
    });
    (0, react_1.useEffect)(() => {
        fetchJobs();
    }, []);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [loading && (0, jsx_runtime_1.jsx)(Loader_1.default, {}), jobs && (jobs === null || jobs === void 0 ? void 0 : jobs.length) < 1 ? ((0, jsx_runtime_1.jsx)("div", { className: "h-screen flex flex-col items-center justify-center", children: (0, jsx_runtime_1.jsx)("h1", { className: "text-3xl font-semibold", children: "No Jobs Found" }) })) : ((0, jsx_runtime_1.jsxs)("div", { className: "container mx-auto md:px-6 px-2 md:py-8 py-4", children: [(0, jsx_runtime_1.jsx)("h1", { className: "md:text-4xl text-3xl font-semibold text-center", children: "Your Jobs" }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 mt-8 md:p-4 p-2 md:grid-cols-2 lg:grid-cols-3 gap-4", children: jobs === null || jobs === void 0 ? void 0 : jobs.map((job) => ((0, jsx_runtime_1.jsx)(MyJob_1.default, { job: job }, job._id))) })] }))] }));
};
exports.default = MyJobs;
