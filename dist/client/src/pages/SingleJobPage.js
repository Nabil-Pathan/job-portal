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
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const react_router_dom_2 = require("react-router-dom");
const SingleJobPage = () => {
    const params = (0, react_router_dom_1.useParams)();
    const [job, setJob] = (0, react_1.useState)();
    const navigate = (0, react_router_dom_2.useNavigate)();
    const user = (0, react_redux_1.useSelector)((state) => state.user.user);
    const fetchJob = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { data } = yield axios_1.default.get(`/api/job/get-job/${params.jobId}`);
            setJob(data.job);
        }
        catch (error) {
            console.log(error.message);
        }
    });
    (0, react_1.useEffect)(() => {
        fetchJob();
    }, [job]);
    const handleApplyJob = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (user === null) {
                navigate('/signin');
            }
            else {
                navigate(`/application/${params.jobId}`);
            }
        }
        catch (error) {
            console.log(error.message);
        }
    });
    return ((0, jsx_runtime_1.jsx)("div", { className: "container mx-auto md:py-8 py-4", children: job ? ((0, jsx_runtime_1.jsxs)("div", { className: "bg-white rounded-lg shadow-lg p-6", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-3xl font-bold", children: job.title }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-600 text-2xl mt-3 font-bold", children: job.company }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-700 text-xl mt-4", children: job.description }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-4", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-lg font-bold", children: "Requirements:" }), (0, jsx_runtime_1.jsx)("ul", { className: "list-disc list-inside mt-2", children: job.requirements.map((req, index) => ((0, jsx_runtime_1.jsx)("li", { className: "text-gray-700", children: req }, index))) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-4", children: [(0, jsx_runtime_1.jsxs)("p", { className: "text-gray-700 text-xl font-medium mt-4", children: ["Location: ", job.location] }), (0, jsx_runtime_1.jsxs)("p", { className: "text-gray-700 text-xl font-medium  mt-4", children: ["Salary: $", job.salary] }), (0, jsx_runtime_1.jsxs)("p", { className: "text-gray-700 text-xl font-medium  mt-4", children: ["Number of Applicants: ", job.applicants.length] })] }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { to: `/profile/${job.postedBy._id}`, className: "flex mt-8 items-center gap-3", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-xl", children: "Posted By : " }), (0, jsx_runtime_1.jsx)("img", { className: "h-[40px] w-[40px] object-cover rounded-full", src: job.postedBy.pic, alt: "" }), (0, jsx_runtime_1.jsx)("h2", { className: "md:text-xl font-semibold underline", children: job.postedBy.name })] }), (0, jsx_runtime_1.jsx)("button", { onClick: handleApplyJob, className: 'bg-blue-600 text-white px-8 mt-4 py-3 rounded-full', children: "Apply" })] })) : ((0, jsx_runtime_1.jsx)("p", { children: "Loading..." })) }));
};
exports.default = SingleJobPage;
