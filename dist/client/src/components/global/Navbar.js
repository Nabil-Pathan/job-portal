"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const react_redux_1 = require("react-redux");
const react_redux_2 = require("react-redux");
const userslice_1 = require("../../redux/userslice");
const react_hot_toast_1 = __importDefault(require("react-hot-toast"));
const logo2_png_1 = __importDefault(require("../../images/logo2.png"));
const Navbar = ({ open, setOpen }) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const dispatch = (0, react_redux_2.useDispatch)();
    const user = (0, react_redux_1.useSelector)((state) => state.user.user);
    let Links = [
        { name: "Home", link: "/" },
        { name: "About Us", link: "/" },
        { name: "Service", link: "/" },
        { name: "Jobs", link: "/jobs" },
        { name: "Contact Us", link: "/" },
    ];
    let Links2 = [
        { name: "Home", link: "/" },
        { name: "Resume Builder", link: "/resume-builder" },
        { name: "Service", link: "/" },
        { name: "Jobs", link: "/jobs" },
        { name: "Profile", link: "/profile" },
        { name: "My Chats", link: "/all-chats" },
    ];
    const handleLogout = () => {
        try {
            dispatch((0, userslice_1.clearUser)());
            navigate('/');
            react_hot_toast_1.default.success("Logout Successful");
        }
        catch (error) {
            console.log(error.message);
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: ` md:relative md:bg-lightGray bg-white container mx-auto   w-full py-2 bottom-2  top-0 left-0`, children: (0, jsx_runtime_1.jsxs)("div", { className: 'md:flex items-center justify-between  py-4 px-10', children: [(0, jsx_runtime_1.jsx)("div", { className: 'font-medium text-xl cursor-pointer flex items-center gap-1', children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { className: 'flex items-center gap-2 md:pr-10', to: "/", children: (0, jsx_runtime_1.jsx)("img", { className: 'w-[100%] md:h-[60px] h-[40px]', src: logo2_png_1.default, alt: "" }) }) }), (0, jsx_runtime_1.jsx)("div", { onClick: () => setOpen(!open), className: 'absolute right-8 top-8 cursor-pointer md:hidden w-7 h-7', children: open ? (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { className: 'text-xl', icon: free_solid_svg_icons_1.faXmark }) : (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { className: 'text-xl', icon: free_solid_svg_icons_1.faBars }) }), (0, jsx_runtime_1.jsxs)("ul", { className: `md:flex gap-6 md:items-center  md:bg-lightGray bg-white   md:pb-0 pb-12 absolute md:static  md:z-auto  left-0 w-full md:w-auto md:px-4 pl-9 transition-all duration-500 ease-in ${open ? 'top-16  ' : 'top-[-490px]'}`, children: [user === null ? Links.map((link) => ((0, jsx_runtime_1.jsx)("li", { onClick: () => setOpen(!open), className: 'flex items-center gap-2 px-2 ', style: { whiteSpace: 'nowrap' }, children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: link.link, className: 'text-darkBlue md:p-0 p-4 text-center flex items-center justify-center gap-2 hover:text-blue-400 duration-500', children: link.name }) }, link.name))) :
                            Links2.map((link) => ((0, jsx_runtime_1.jsx)("li", { onClick: () => setOpen(!open), className: 'flex items-center gap-2 px-2 ', style: { whiteSpace: 'nowrap' }, children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: link.link, className: 'text-darkBlue md:p-0 p-4 text-center flex items-center justify-center gap-2 hover:text-blue-400 duration-500', children: link.name }) }, link.name))), user !== null ? ((0, jsx_runtime_1.jsx)("div", { className: 'px-2', children: (0, jsx_runtime_1.jsx)("button", { onClick: handleLogout, className: 'border border-gray-800 md:hidden flex  px-8 py-2 rounded-full duration-500', children: "Logout" }) })) : ((0, jsx_runtime_1.jsx)("div", { className: 'px-2', children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { onClick: () => setOpen(!open), to: '/signin', children: (0, jsx_runtime_1.jsx)("button", { className: 'border border-gray-800 md:hidden flex  px-8 py-2 rounded-full duration-500', children: "Login" }) }) }))] }), user !== null ? ((0, jsx_runtime_1.jsx)("div", { className: 'md:flex  md:mr-2  hidden items-center', children: (0, jsx_runtime_1.jsx)("button", { onClick: handleLogout, className: 'border border-gray-800   px-8 py-2 rounded-full duration-500', children: "Logout" }) })) : ((0, jsx_runtime_1.jsx)("div", { className: 'md:flex  md:mr-2  hidden items-center', children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/signin", children: (0, jsx_runtime_1.jsx)("button", { className: 'border border-gray-800   px-8 py-2 rounded-full duration-500', children: "Get Started" }) }) }))] }) }));
};
exports.default = Navbar;
