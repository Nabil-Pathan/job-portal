"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ApplicationComponent = ({ application }) => {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { className: "px-6 py-4 whitespace-no-wrap", children: application.name }), (0, jsx_runtime_1.jsx)("td", { className: "px-6 py-4 whitespace-no-wrap", children: application.email }), (0, jsx_runtime_1.jsx)("td", { className: "px-6 py-4 whitespace-no-wrap", children: application.role }), (0, jsx_runtime_1.jsx)("td", { className: "px-6 py-4 whitespace-no-wrap", children: application.experience }), (0, jsx_runtime_1.jsx)("td", { className: "px-6 py-4 whitespace-no-wrap", children: (0, jsx_runtime_1.jsx)("a", { target: '_blank', href: application.resume, className: "text-blue-500 hover:underline", children: "View Resume" }) }), (0, jsx_runtime_1.jsx)("td", { className: "px-6 py-4 whitespace-no-wrap", children: application.coverLetter })] }) }));
};
exports.default = ApplicationComponent;
