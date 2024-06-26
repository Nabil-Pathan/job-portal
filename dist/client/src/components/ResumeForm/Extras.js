"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Extras = ({ formData, setFormData }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: " mt-4 mx-auto p-4", children: (0, jsx_runtime_1.jsxs)("form", { className: "flex flex-col items-center justify-center gap-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-3", children: [(0, jsx_runtime_1.jsx)("label", { className: "md:text-xl", children: "Languages" }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "px-4 py-2 rounded-md outline-none", id: "name", value: formData.extra_1, onChange: (e) => {
                                setFormData(Object.assign(Object.assign({}, formData), { extra_1: e.target.value }));
                            } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex  flex-col gap-3", children: [(0, jsx_runtime_1.jsx)("label", { className: "md:text-xl", children: "Hobbies" }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "px-4 py-2 rounded-md outline-none", id: "name", value: formData.extra_2, onChange: (e) => {
                                setFormData(Object.assign(Object.assign({}, formData), { extra_2: e.target.value }));
                            } })] })] }) }));
};
exports.default = Extras;
