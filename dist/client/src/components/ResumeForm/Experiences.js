"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Experiences = ({ formData, setFormData }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: "container mt-4 mx-auto p-4", children: (0, jsx_runtime_1.jsxs)("form", { className: "flex flex-col items-center justify-center gap-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center md:flex-row flex-col gap-3", children: [(0, jsx_runtime_1.jsx)("label", { className: "md:text-xl", children: " First company" }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "px-4 py-2 rounded-md outline-none", id: "name", value: formData.exp1_org, onChange: (e) => {
                                setFormData(Object.assign(Object.assign({}, formData), { exp1_org: e.target.value }));
                            } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center md:flex-row flex-col gap-3", children: [(0, jsx_runtime_1.jsx)("label", { className: "md:text-xl", children: "Designation" }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "px-4 py-2 rounded-md outline-none", id: "phone", value: formData.exp1_pos, onChange: (e) => {
                                setFormData(Object.assign(Object.assign({}, formData), { exp1_pos: e.target.value }));
                            } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center md:flex-row flex-col gap-3", children: [(0, jsx_runtime_1.jsx)("label", { className: "md:text-xl", children: "Duration" }), (0, jsx_runtime_1.jsx)("input", { type: "email", className: "px-4 py-2 rounded-md outline-none", id: "Email", value: formData.exp1_dur, onChange: (e) => {
                                setFormData(Object.assign(Object.assign({}, formData), { exp1_dur: e.target.value }));
                            } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center md:flex-row flex-col gap-3", children: [(0, jsx_runtime_1.jsx)("label", { className: "md:text-xl", children: "Job description" }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "px-4 py-2 rounded-md outline-none", id: "github", value: formData.exp1_desc, onChange: (e) => {
                                setFormData(Object.assign(Object.assign({}, formData), { exp1_desc: e.target.value }));
                            } })] }), (0, jsx_runtime_1.jsx)("hr", { className: "my-4 w-full" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center md:flex-row flex-col gap-3", children: [(0, jsx_runtime_1.jsx)("label", { className: "md:text-xl", children: "Second company" }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "px-4 py-2 rounded-md outline-none", id: "name", value: formData.exp2_org, onChange: (e) => {
                                setFormData(Object.assign(Object.assign({}, formData), { exp2_org: e.target.value }));
                            } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center md:flex-row flex-col gap-3", children: [(0, jsx_runtime_1.jsx)("label", { className: "md:text-xl", children: "Designation" }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "px-4 py-2 rounded-md outline-none", id: "Email", value: formData.exp2_pos, onChange: (e) => {
                                setFormData(Object.assign(Object.assign({}, formData), { exp2_pos: e.target.value }));
                            } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center md:flex-row flex-col gap-3", children: [(0, jsx_runtime_1.jsx)("label", { className: "md:text-xl", children: "Duration" }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "px-4 py-2 rounded-md outline-none", id: "phone", value: formData.exp2_dur, onChange: (e) => {
                                setFormData(Object.assign(Object.assign({}, formData), { exp2_dur: e.target.value }));
                            } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center md:flex-row flex-col gap-3", children: [(0, jsx_runtime_1.jsx)("label", { className: "md:text-xl", children: "Job description" }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "px-4 py-2 rounded-md outline-none", id: "github", value: formData.exp2_desc, onChange: (e) => {
                                setFormData(Object.assign(Object.assign({}, formData), { exp2_desc: e.target.value }));
                            } })] })] }) }));
};
exports.default = Experiences;
