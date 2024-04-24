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
const free_regular_svg_icons_1 = require("@fortawesome/free-regular-svg-icons");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const axios_1 = __importDefault(require("axios"));
const react_hot_toast_1 = __importDefault(require("react-hot-toast"));
const react_redux_2 = require("react-redux");
const userslice_1 = require("../../redux/userslice");
const Job = ({ job }) => {
    const dispatch = (0, react_redux_2.useDispatch)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const user = (0, react_redux_1.useSelector)((state) => state.user.user);
    const handleApplyJob = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (user === null) {
                navigate('/signin');
            }
            else {
                navigate(`/application/${job._id}`);
            }
        }
        catch (error) {
            console.log(error.message);
        }
    });
    const handleSaveJob = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (user === null) {
                navigate('/signin');
            }
            else if (user.savedJobs.includes(job._id)) {
                const config = {
                    headers: {
                        Authorization: `Bearer ${user === null || user === void 0 ? void 0 : user.token}`
                    }
                };
                const { data } = yield axios_1.default.post(`/api/job/remove-saved-job/${job._id}`, {}, config);
                console.log(data);
                react_hot_toast_1.default.success('Job Removed');
                dispatch((0, userslice_1.setUser)({ _id: user._id, name: user.name, email: user.email, pic: user.pic, token: user.token, savedJobs: data.savedJobs }));
            }
            else {
                const config = {
                    headers: {
                        Authorization: `Bearer ${user === null || user === void 0 ? void 0 : user.token}`
                    }
                };
                const { data } = yield axios_1.default.post(`/api/job/save-job/${job._id}`, {}, config);
                react_hot_toast_1.default.success('Job Saved');
                dispatch((0, userslice_1.setUser)({ _id: user._id, name: user.name, email: user.email, pic: user.pic, token: user.token, savedJobs: data.savedJobs }));
            }
        }
        catch (error) {
            console.log(error.message);
        }
    });
    return ((0, jsx_runtime_1.jsxs)("div", { className: "border p-4 rounded-lg custom-shadow-1", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-2xl font-bold", children: job.title }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-600", children: job.company }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-700 mt-4", children: job.description }), (0, jsx_runtime_1.jsx)("h1", { className: 'text-xl font-medium mt-4', children: "Skills Requirement" }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-3 gap-2 mt-4", children: job.requirements.map((skill, index) => ((0, jsx_runtime_1.jsx)("span", { className: "bg-gray-200 text-gray-800  py-1 text-center font-medium rounded-full text-sm", children: skill }, index))) }), (0, jsx_runtime_1.jsxs)("p", { className: "mt-4", children: ["Location: ", job.location] }), (0, jsx_runtime_1.jsxs)("p", { className: 'font-semibold m mt-4 text-xl', children: ["Salary: $", job.salary] }), (0, jsx_runtime_1.jsxs)("p", { className: "mt-4", children: ["Applicants: ", job.applicants.length] }), (0, jsx_runtime_1.jsxs)("div", { className: 'flex md:flex-row  flex-col   gap-2', children: [(0, jsx_runtime_1.jsx)("button", { onClick: handleApplyJob, className: 'bg-blue-600 text-white px-8 mt-4 py-3 rounded-full', children: "Apply" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: `/job/${job._id}`, children: (0, jsx_runtime_1.jsx)("button", { className: 'bg-gray-300 w-[100%]  px-8 mt-4 py-3 rounded-full', children: "View Details" }) })] }), (0, jsx_runtime_1.jsx)("div", { className: 'flex justify-end mt-6 p-4', children: (0, jsx_runtime_1.jsx)("button", { onClick: handleSaveJob, children: (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { className: 'h-[30px]', icon: (user === null || user === void 0 ? void 0 : user.savedJobs.includes(job._id)) ? free_solid_svg_icons_1.faBookmark : free_regular_svg_icons_1.faBookmark }) }) })] }));
};
exports.default = Job;
