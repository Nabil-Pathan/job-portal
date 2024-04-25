"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const PersonalDetails = ({ formData, setFormData }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: "container mt-6 mx-auto", children: (0, jsx_runtime_1.jsxs)("form", { className: "flex flex-col gap-4 w-[100%]", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex md:flex-row flex-col items-center w-full justify-center gap-3", children: [(0, jsx_runtime_1.jsx)("label", { className: "md:text-xl", children: "Name" }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "px-4 py-2 rounded-md  outline-none", id: "name", value: formData.name, onChange: (e) => {
                                setFormData(Object.assign(Object.assign({}, formData), { name: e.target.value }));
                            } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex md:flex-row flex-col items-center justify-center gap-3", children: [(0, jsx_runtime_1.jsx)("label", { className: "md:text-xl", children: "Email" }), (0, jsx_runtime_1.jsx)("input", { type: "email", className: "px-4 py-2 rounded-md outline-none", id: "Email", value: formData.email, onChange: (e) => {
                                setFormData(Object.assign(Object.assign({}, formData), { email: e.target.value }));
                            } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex md:flex-row flex-col items-center justify-center gap-3", children: [(0, jsx_runtime_1.jsx)("label", { className: "md:text-xl", children: "Phone" }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "px-4 py-2 outline-none rounded-md", id: "phone", value: formData.phone, onChange: (e) => {
                                setFormData(Object.assign(Object.assign({}, formData), { phone: e.target.value }));
                            } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex md:flex-row flex-col items-center justify-center gap-3", children: [(0, jsx_runtime_1.jsx)("label", { className: "md:text-xl", children: "Github" }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "px-4 py-2 rounded-md outline-none", id: "github", placeholder: "https://github/YOURUSERNAME", value: formData.github, onChange: (e) => {
                                setFormData(Object.assign(Object.assign({}, formData), { github: e.target.value }));
                            } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex md:flex-row flex-col items-center justify-center gap-3", children: [(0, jsx_runtime_1.jsx)("label", { className: "md:text-xl", children: "LinkedIn" }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "px-4 py-2 rounded-md outline-none", id: "LinkedIn", placeholder: "https://linkedIn/YOURUSERNAME", value: formData.linkedin, onChange: (e) => {
                                setFormData(Object.assign(Object.assign({}, formData), { linkedin: e.target.value }));
                            } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex md:flex-row flex-col items-center justify-center gap-3", children: [(0, jsx_runtime_1.jsx)("label", { className: "md:text-xl", children: "Skills" }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "px-4 py-2 rounded-md outline-none", id: "Skills", placeholder: "Enter skills and separate each of them with a comma ", value: formData.skills, onChange: (e) => {
                                setFormData(Object.assign(Object.assign({}, formData), { skills: e.target.value }));
                            } })] })] }) }));
};
exports.default = PersonalDetails;
