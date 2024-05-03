"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Education = ({ formData, setFormData }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: "flex md:w-[60%] w-[100%] flex-col flex-start mt-4 bg-white px-4 py-12", children: (0, jsx_runtime_1.jsxs)("form", { className: " flex  md:flex-row flex-col  w-full gap-3 ", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex-1", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex  flex-col  gap-3", children: [(0, jsx_runtime_1.jsx)("label", { className: "md:text-xl", children: " First Institute name" }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "px-4 py-2 bg-gray-200 rounded-md outline-none", id: "name", value: formData.edu1_school, onChange: (e) => {
                                        setFormData(Object.assign(Object.assign({}, formData), { edu1_school: e.target.value }));
                                    } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex  flex-col gap-3", children: [(0, jsx_runtime_1.jsx)("label", { className: "md:text-xl", children: "Year you graduated" }), (0, jsx_runtime_1.jsx)("input", { type: "email", className: "px-4 py-2 bg-gray-200 rounded-md outline-none", id: "Email", value: formData.edu1_year, onChange: (e) => {
                                        setFormData(Object.assign(Object.assign({}, formData), { edu1_year: e.target.value }));
                                    } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex  flex-col  gap-3", children: [(0, jsx_runtime_1.jsx)("label", { className: "md:text-xl", children: "Degree" }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "px-4 py-2 rounded-md bg-gray-200 outline-none", id: "phone", value: formData.edu1_qualification, onChange: (e) => {
                                        setFormData(Object.assign(Object.assign({}, formData), { edu1_qualification: e.target.value }));
                                    } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex  flex-col  gap-3", children: [(0, jsx_runtime_1.jsx)("label", { className: "md:text-xl", children: "Description" }), (0, jsx_runtime_1.jsx)("textarea", { className: "px-4 py-2 text-area bg-gray-200 rounded-md outline-none", id: "github", value: formData.edu1_desc, onChange: (e) => {
                                        setFormData(Object.assign(Object.assign({}, formData), { edu1_desc: e.target.value }));
                                    } })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex-1", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex  flex-col  gap-3", children: [(0, jsx_runtime_1.jsx)("label", { className: "md:text-xl", children: " Second Institute name" }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "px-4 py-2 bg-gray-200 rounded-md outline-none", id: "name", value: formData.edu2_school, onChange: (e) => {
                                        setFormData(Object.assign(Object.assign({}, formData), { edu2_school: e.target.value }));
                                    } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex  flex-col gap-3", children: [(0, jsx_runtime_1.jsx)("label", { className: "md:text-xl", children: "Year of graduated " }), (0, jsx_runtime_1.jsx)("input", { type: "email", className: "px-4 py-2 rounded-md bg-gray-200 outline-none", id: "Email", value: formData.edu2_year, onChange: (e) => {
                                        setFormData(Object.assign(Object.assign({}, formData), { edu2_year: e.target.value }));
                                    } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex  flex-col gap-3", children: [(0, jsx_runtime_1.jsx)("label", { className: "md:text-xl", children: "Degree" }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "px-4 py-2 rounded-md bg-gray-200 outline-none", id: "phone", value: formData.edu2_qualification, onChange: (e) => {
                                        setFormData(Object.assign(Object.assign({}, formData), { edu2_qualification: e.target.value }));
                                    } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex  flex-col gap-3", children: [(0, jsx_runtime_1.jsx)("label", { className: "md:text-xl", children: " description" }), (0, jsx_runtime_1.jsx)("textarea", { className: "px-4 py-2 text-area bg-gray-200 rounded-md outline-none", id: "github", value: formData.edu2_desc, onChange: (e) => {
                                        setFormData(Object.assign(Object.assign({}, formData), { edu2_desc: e.target.value }));
                                    } })] })] })] }) }));
};
exports.default = Education;
