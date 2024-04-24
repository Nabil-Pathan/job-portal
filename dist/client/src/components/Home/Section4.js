"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const HomeCarousel_1 = __importDefault(require("./HomeCarousel"));
const Section4 = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'mt-10 bg-gray-300 rounded-3xl md:py-8 py-2 md:px-20 px-4', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'mt-4', children: [(0, jsx_runtime_1.jsx)("h3", { className: 'text-center text-xl', children: "Testimonials" }), (0, jsx_runtime_1.jsxs)("h1", { className: 'text-center md:text-5xl text-3xl mt-2 font-semibold', children: ["Here is what our Clients ", (0, jsx_runtime_1.jsx)("br", {}), " are saying About us"] })] }), (0, jsx_runtime_1.jsx)("div", { className: 'mt-8', children: (0, jsx_runtime_1.jsx)(HomeCarousel_1.default, {}) })] }));
};
exports.default = Section4;
