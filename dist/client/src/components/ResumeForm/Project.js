"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Project = ({ formData, setFormData }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex md:w-[60%] w-[100%] flex-col flex-start mt-4 bg-white px-4 py-12", children: (0, jsx_runtime_1.jsxs)("form", { className: "flex md:flex-row flex-col w-full gap-3", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex-1", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-3", children: [(0, jsx_runtime_1.jsx)("label", { className: "md:text-xl", children: "First Project Name" }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "px-4 py-2 bg-gray-200 rounded-md outline-none", id: "name", value: formData.proj1_title, onChange: (e) => {
                                        setFormData(Object.assign(Object.assign({}, formData), { proj1_title: e.target.value }));
                                    } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-3", children: [(0, jsx_runtime_1.jsx)("label", { className: "md:text-xl", children: "Link to project" }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "px-4 py-2 bg-gray-200 rounded-md outline-none", id: "phone", value: formData.proj1_link, onChange: (e) => {
                                        setFormData(Object.assign(Object.assign({}, formData), { proj1_link: e.target.value }));
                                    } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-3", children: [(0, jsx_runtime_1.jsx)("label", { className: "md:text-xl", children: "Description" }), (0, jsx_runtime_1.jsx)("textarea", { className: "px-4 py-2 text-area bg-gray-200 rounded-md outline-none", id: "github", value: formData.proj1_desc, onChange: (e) => {
                                        setFormData(Object.assign(Object.assign({}, formData), { proj1_desc: e.target.value }));
                                    } })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex-1", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-3", children: [(0, jsx_runtime_1.jsx)("label", { className: "md:text-xl", children: "Second Project Name" }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "px-4 py-2 bg-gray-200 rounded-md outline-none", id: "name", value: formData.proj2_title, onChange: (e) => {
                                        setFormData(Object.assign(Object.assign({}, formData), { proj2_title: e.target.value }));
                                    } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-3", children: [(0, jsx_runtime_1.jsx)("label", { className: "md:text-xl", children: "Link of project" }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "px-4 py-2 bg-gray-200 rounded-md outline-none", id: "Email", value: formData.proj2_link, onChange: (e) => {
                                        setFormData(Object.assign(Object.assign({}, formData), { proj2_link: e.target.value }));
                                    } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-3", children: [(0, jsx_runtime_1.jsx)("label", { className: "md:text-xl", children: "Description" }), (0, jsx_runtime_1.jsx)("textarea", { className: "px-4 py-2 text-area bg-gray-200 rounded-md outline-none", id: "github", value: formData.proj2_desc, onChange: (e) => {
                                        setFormData(Object.assign(Object.assign({}, formData), { proj2_desc: e.target.value }));
                                    } })] })] })] }) }));
};
exports.default = Project;
