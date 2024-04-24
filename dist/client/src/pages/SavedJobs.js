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
const Job_1 = __importDefault(require("../components/Extra/Job"));
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
const SavedJobs = () => {
    const user = (0, react_redux_1.useSelector)((state) => state.user.user);
    const [jobs, setJobs] = (0, react_1.useState)();
    const fetchJobs = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user === null || user === void 0 ? void 0 : user.token}`
                }
            };
            const { data } = yield axios_1.default.get('/api/job/get-saved-jobs', config);
            console.log(data);
            setJobs(data.savedJobs);
        }
        catch (error) {
            console.log(error.message);
        }
    });
    (0, react_1.useEffect)(() => {
        fetchJobs();
    }, []);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: jobs && (jobs === null || jobs === void 0 ? void 0 : jobs.length) < 1 ? ((0, jsx_runtime_1.jsx)("div", { className: "h-screen flex flex-col items-center justify-center", children: (0, jsx_runtime_1.jsx)("h1", { className: "text-3xl font-semibold", children: "No Jobs Found" }) })) : ((0, jsx_runtime_1.jsxs)("div", { className: "container mx-auto md:p-4", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-3xl font-semibold text-center mt-4", children: "Saved Jobs" }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 mt-8 md:p-4 p-2 md:grid-cols-2 lg:grid-cols-3 gap-4", children: jobs &&
                        jobs.map((job) => ((0, jsx_runtime_1.jsx)(Job_1.default, { job: job }, job.title))) })] })) }));
};
exports.default = SavedJobs;
