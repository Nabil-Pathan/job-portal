"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const react_2 = require("react");
const ShowNavbar = ({ children }) => {
    const location = (0, react_router_dom_1.useLocation)();
    const [showNavbar, setShowNavbar] = (0, react_1.useState)(true);
    (0, react_2.useEffect)(() => {
        if (location.pathname.includes('/chat/')) {
            setShowNavbar(false);
        }
        else {
            setShowNavbar(true);
        }
    }, [location]);
    return ((0, jsx_runtime_1.jsx)("div", { children: showNavbar && children }));
};
exports.default = ShowNavbar;
