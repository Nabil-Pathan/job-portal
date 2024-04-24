"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const news_letter4_png_1 = __importDefault(require("../../images/news-letter4.png"));
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const Section3 = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'flex mt-10 p-4 rounded-3xl md:flex-row flex-col gap-2', children: [(0, jsx_runtime_1.jsx)("div", { className: "flex-1 md:px-8 px-2 md:py-8 py-4", children: (0, jsx_runtime_1.jsxs)("div", { className: 'flex md:p-10 flex-col', children: [(0, jsx_runtime_1.jsx)("h2", { className: ' text-xl  p-2', children: " Newsletters" }), (0, jsx_runtime_1.jsxs)("h1", { className: 'md:text-6xl text-4xl font-semibold', children: ["Get Every ", (0, jsx_runtime_1.jsx)("br", {}), " Single Update"] }), (0, jsx_runtime_1.jsx)("div", { className: '', children: (0, jsx_runtime_1.jsx)("p", { className: 'mt-4  text-xl ', children: "We are available on store download our Apps" }) }), (0, jsx_runtime_1.jsxs)("div", { className: 'flex mt-6 relative ', children: [(0, jsx_runtime_1.jsx)("input", { type: "text", className: 'rounded-full bg-gray-700 text-white font-medium focus:outline-none p-4 w-full', placeholder: 'Email Address' }), (0, jsx_runtime_1.jsx)("button", { className: 'absolute right-0 top-0 bottom-0 bg-gray-300 font-bold rounded-full px-6 py-2 ', children: (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { className: 'text-xl font-semibold', icon: free_solid_svg_icons_1.faAngleRight }) })] })] }) }), (0, jsx_runtime_1.jsx)("div", { className: "flex-1 flex items-center justify-center  md:px-8 px-2 md:py-8 py-4 ", children: (0, jsx_runtime_1.jsx)("img", { className: '', src: news_letter4_png_1.default, alt: "" }) })] }));
};
exports.default = Section3;
