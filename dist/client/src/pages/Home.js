"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const HeroSection_1 = __importDefault(require("../components/Home/HeroSection"));
const Section2_1 = __importDefault(require("../components/Home/Section2"));
const Section3_1 = __importDefault(require("../components/Home/Section3"));
const Section4_1 = __importDefault(require("../components/Home/Section4"));
const Home = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'container mx-auto', children: [(0, jsx_runtime_1.jsx)("div", { className: '', children: (0, jsx_runtime_1.jsx)(HeroSection_1.default, {}) }), (0, jsx_runtime_1.jsx)("div", { className: 'mt-10', children: (0, jsx_runtime_1.jsx)(Section2_1.default, {}) }), (0, jsx_runtime_1.jsx)("div", { className: 'container mx-auto mt-10', children: (0, jsx_runtime_1.jsx)(Section3_1.default, {}) }), (0, jsx_runtime_1.jsx)("div", { className: 'container mx-auto mt-10', children: (0, jsx_runtime_1.jsx)(Section4_1.default, {}) })] }));
};
exports.default = Home;
