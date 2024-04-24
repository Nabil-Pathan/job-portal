"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const HeroImage_png_1 = __importDefault(require("../../images/HeroImage.png"));
const react_router_dom_1 = require("react-router-dom");
const HeroSection = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'flex md:flex-row flex-col gap-8 md:p-10 p-4', children: [(0, jsx_runtime_1.jsx)("div", { className: 'flex-1', children: (0, jsx_runtime_1.jsx)("div", { className: ' flex  items-center rounded-3xl justify-center  ', children: (0, jsx_runtime_1.jsx)("img", { src: HeroImage_png_1.default, alt: "HeroImage" }) }) }), (0, jsx_runtime_1.jsxs)("div", { className: 'flex justify-center flex-1 flex-col', children: [(0, jsx_runtime_1.jsxs)("h2", { className: ' text-xl p-2', children: [" ", (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faArrowLeft }), " Best Services"] }), (0, jsx_runtime_1.jsx)("h1", { className: 'md:text-6xl text-4xl font-semibold', children: "Find the best Job suits you in just few steps" }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("p", { className: 'mt-8 text-xl ', children: ["Lorem ipsum\u00A0is placeholder text commonly used in the  ", (0, jsx_runtime_1.jsx)("br", {}), " graphic,  previewing layouts and visual."] }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: '/jobs', children: (0, jsx_runtime_1.jsx)("button", { className: 'border mt-8 border-gray-800   px-8 py-4  rounded-full duration-500', children: "Find Job" }) })] })] })] }));
};
exports.default = HeroSection;
