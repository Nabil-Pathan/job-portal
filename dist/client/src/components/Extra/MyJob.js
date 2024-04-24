"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("react");
const DeleteJobModal_1 = __importDefault(require("./DeleteJobModal"));
const MyJob = ({ job }) => {
    const [deleteModal, setDeleteModal] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "border p-4 rounded-lg custom-shadow-1", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-2xl font-bold", children: job.title }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-600", children: job.company }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-700 mt-4", children: job.description }), (0, jsx_runtime_1.jsx)("h1", { className: 'text-xl font-medium mt-4', children: "Skills Requirement" }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-3 gap-2 mt-4", children: job.requirements.map((skill, index) => ((0, jsx_runtime_1.jsx)("span", { className: "bg-gray-200 text-gray-800  py-1 text-center font-medium rounded-full text-sm", children: skill }, index))) }), (0, jsx_runtime_1.jsxs)("p", { className: "mt-4", children: ["Location: ", job.location] }), (0, jsx_runtime_1.jsxs)("p", { className: 'font-semibold m mt-4 text-xl', children: ["Salary: $", job.salary] }), (0, jsx_runtime_1.jsxs)("p", { className: "mt-4", children: ["Applicants: ", job.applicants.length] }), (0, jsx_runtime_1.jsxs)("div", { className: 'flex md:flex-row  flex-col   gap-2', children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { className: 'w-[100%]', to: `/edit-job/${job._id}`, children: (0, jsx_runtime_1.jsx)("button", { className: 'bg-blue-600 w-[100%] text-white px-8 mt-4 py-3 rounded-full', children: "Edit" }) }), (0, jsx_runtime_1.jsx)("button", { onClick: () => setDeleteModal(true), className: 'bg-red-600 text-white font-bold w-[100%]  px-8 mt-4 py-3 rounded-full', children: "Delete" })] }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: `/applications/${job._id}`, children: (0, jsx_runtime_1.jsx)("button", { className: 'bg-teal-400 text-white w-full mt-6 font-bold px-3 py-4 rounded-full', children: "View applications" }) })] }), deleteModal && (0, jsx_runtime_1.jsx)(DeleteJobModal_1.default, { jobId: job._id, setDeleteModal: setDeleteModal })] }));
};
exports.default = MyJob;
