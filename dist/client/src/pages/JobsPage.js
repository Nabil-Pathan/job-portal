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
const Job_1 = __importDefault(require("../components/Extra/Job"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const react_redux_1 = require("react-redux");
const Loader_1 = __importDefault(require("../components/Extra/Loader"));
const JobsPage = ({ open }) => {
    const user = (0, react_redux_1.useSelector)((state) => state.user.user);
    const [jobs, setJobs] = (0, react_1.useState)();
    const [searchQuery, setSearchQuery] = (0, react_1.useState)("");
    const [loading, setLoading] = (0, react_1.useState)(false);
    const handleSearchChange = (e) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const query = e.target.value;
            setSearchQuery(query);
            const config = {
                headers: {
                    Authorization: `Bearer ${user === null || user === void 0 ? void 0 : user.token}`
                }
            };
            const { data } = yield axios_1.default.get(`/api/job/search-job?searchQuery=${searchQuery}`, config);
            setJobs(data.jobs);
        }
        catch (error) {
            console.log(error);
        }
    });
    const fetchJobs = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            setLoading(true);
            const { data } = yield axios_1.default.get('/api/job/getall-jobs');
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
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: loading ? ((0, jsx_runtime_1.jsx)(Loader_1.default, {})) : ((0, jsx_runtime_1.jsxs)("div", { className: "container mx-auto flex flex-col items-center md:px-4 px-2 py-8", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-3xl font-bold text-center mb-8", children: "Job Listings" }), (0, jsx_runtime_1.jsxs)("div", { className: `relative md:w-[70%] w-[100%] ${open ? 'z-[-1]' : 'z-0'}   mt-4 text-center`, children: [(0, jsx_runtime_1.jsx)("input", { type: "text", placeholder: "Search Jobs...", value: searchQuery, onChange: handleSearchChange, className: "text-black shadow-xl outline-none border-2 border-gray p-2 w-full pl-10 rounded-full" }), (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faSearch, className: "absolute left-3 top-3 text-gray-500 h-5 w-5" })] }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 mt-8 md:p-4 p-2 md:grid-cols-2 lg:grid-cols-3 gap-4", children: jobs &&
                        jobs.map((job) => ((0, jsx_runtime_1.jsx)(Job_1.default, { job: job }, job.title))) })] })) }));
};
exports.default = JobsPage;
