"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Project = ({ formData, setFormData }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: "container mt-4 mx-auto p-4", children: (0, jsx_runtime_1.jsxs)("form", { className: "flex flex-col items-center justify-center gap-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center md:flex-row flex-col gap-3", children: [(0, jsx_runtime_1.jsx)("label", { className: "md:text-xl", children: "Name of project" }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "px-4 py-2 rounded-md outline-none", id: "name", value: formData.proj1_title, onChange: (e) => {
                                setFormData(Object.assign(Object.assign({}, formData), { proj1_title: e.target.value }));
                            } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center md:flex-row flex-col gap-3", children: [(0, jsx_runtime_1.jsx)("label", { className: "md:text-xl", children: "Link to project" }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "px-4 py-2 rounded-md outline-none", id: "phone", value: formData.proj1_link, onChange: (e) => {
                                setFormData(Object.assign(Object.assign({}, formData), { proj1_link: e.target.value }));
                            } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center md:flex-row flex-col gap-3", children: [(0, jsx_runtime_1.jsx)("label", { className: "md:text-xl", children: "Description about project" }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "px-4 py-2 rounded-md outline-none", id: "github", value: formData.proj1_desc, onChange: (e) => {
                                setFormData(Object.assign(Object.assign({}, formData), { proj1_desc: e.target.value }));
                            } })] }), (0, jsx_runtime_1.jsx)("hr", { className: "my-4 w-full" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center md:flex-row flex-col gap-3", children: [(0, jsx_runtime_1.jsx)("label", { className: "md:text-xl", children: "Enter your Second Project Name" }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "px-4 py-2 rounded-md outline-none", id: "name", value: formData.proj2_title, onChange: (e) => {
                                setFormData(Object.assign(Object.assign({}, formData), { proj2_title: e.target.value }));
                            } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center md:flex-row flex-col gap-3", children: [(0, jsx_runtime_1.jsx)("label", { className: "md:text-xl", children: "Link of second project" }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "px-4 py-2 rounded-md outline-none", id: "Email", value: formData.proj2_link, onChange: (e) => {
                                setFormData(Object.assign(Object.assign({}, formData), { proj2_link: e.target.value }));
                            } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center md:flex-row flex-col gap-3", children: [(0, jsx_runtime_1.jsx)("label", { className: "md:text-xl", children: "Description" }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "px-4 py-2 rounded-md outline-none", id: "github", value: formData.proj2_desc, onChange: (e) => {
                                setFormData(Object.assign(Object.assign({}, formData), { proj2_desc: e.target.value }));
                            } })] })] }) }));
};
exports.default = Project;
