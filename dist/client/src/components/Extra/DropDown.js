"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const Dropdown = ({ open }) => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const dropdownRef = (0, react_1.useRef)(null);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const closeDropdown = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };
    (0, react_1.useEffect)(() => {
        window.addEventListener('click', closeDropdown);
        return () => {
            window.removeEventListener('click', closeDropdown);
        };
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { ref: dropdownRef, className: `${open ? 'z-[-1]' : 'z-0'} relative inline-block text-left`, children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("button", { type: "button", className: "inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-3 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none", onClick: toggleDropdown, children: (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { className: 'text-xl', icon: free_solid_svg_icons_1.faEllipsisVertical }) }) }), isOpen && ((0, jsx_runtime_1.jsx)("div", { className: "origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none", role: "menu", "aria-orientation": "vertical", "aria-labelledby": "options-menu", children: (0, jsx_runtime_1.jsxs)("div", { className: "py-1", role: "none", children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: '/saved-jobs', className: "block px-4 py-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900", role: "menuitem", children: "Saved Jobs" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: '/create-job', className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900", role: "menuitem", children: "Create Job" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: '/created-jobs', className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900", role: "menuitem", children: "My Jobs" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: '/my-applications', className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900", role: "menuitem", children: "My Applications" })] }) }))] }));
};
exports.default = Dropdown;
