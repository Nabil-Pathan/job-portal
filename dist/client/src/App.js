"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const Home_1 = __importDefault(require("./pages/Home"));
const Navbar_1 = __importDefault(require("./components/global/Navbar"));
const Footer_1 = __importDefault(require("./components/global/Footer"));
const Login_1 = __importDefault(require("./pages/Login"));
const Register_1 = __importDefault(require("./pages/Register"));
const react_hot_toast_1 = require("react-hot-toast");
const JobsPage_1 = __importDefault(require("./pages/JobsPage"));
const ProfilePage_1 = __importDefault(require("./pages/ProfilePage"));
const SingleJobPage_1 = __importDefault(require("./pages/SingleJobPage"));
const JobApplicationPage_1 = __importDefault(require("./pages/JobApplicationPage"));
const react_1 = require("react");
const CreateJob_1 = __importDefault(require("./pages/CreateJob"));
const SavedJobs_1 = __importDefault(require("./pages/SavedJobs"));
const MyJobs_1 = __importDefault(require("./pages/MyJobs"));
const EditJob_1 = __importDefault(require("./pages/EditJob"));
const AllJobApplications_1 = __importDefault(require("./pages/AllJobApplications"));
const PublicRoute_1 = __importDefault(require("./Routes/PublicRoute"));
const PrivateRoute_1 = __importDefault(require("./Routes/PrivateRoute"));
const ResumeForm_1 = __importDefault(require("./pages/ResumeForm"));
const MyApplications_1 = __importDefault(require("./pages/MyApplications"));
const UserProfile_1 = __importDefault(require("./pages/UserProfile"));
const ChatPage_1 = __importDefault(require("./pages/ChatPage"));
const ShowNavbar_1 = __importDefault(require("./components/Extra/ShowNavbar"));
const ShowFooter_1 = __importDefault(require("./components/Extra/ShowFooter"));
const AllChats_1 = __importDefault(require("./pages/AllChats"));
function App() {
    let [open, setOpen] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_hot_toast_1.Toaster, { position: "top-center", toastOptions: {
                    success: {
                        iconTheme: {
                            primary: '#4aed88',
                            secondary: '',
                        },
                    },
                } }), (0, jsx_runtime_1.jsx)(ShowNavbar_1.default, { children: (0, jsx_runtime_1.jsx)(Navbar_1.default, { open: open, setOpen: setOpen }) }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(Home_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/signin", element: (0, jsx_runtime_1.jsx)(PublicRoute_1.default, { element: (0, jsx_runtime_1.jsx)(Login_1.default, {}) }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/signup", element: (0, jsx_runtime_1.jsx)(PublicRoute_1.default, { element: (0, jsx_runtime_1.jsx)(Register_1.default, {}) }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/jobs", element: (0, jsx_runtime_1.jsx)(JobsPage_1.default, { open: open }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/profile/:userId", element: (0, jsx_runtime_1.jsx)(UserProfile_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/resume-builder", element: (0, jsx_runtime_1.jsx)(ResumeForm_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/profile", element: (0, jsx_runtime_1.jsx)(PrivateRoute_1.default, { element: (0, jsx_runtime_1.jsx)(ProfilePage_1.default, { open: open }) }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/create-job", element: (0, jsx_runtime_1.jsx)(PrivateRoute_1.default, { element: (0, jsx_runtime_1.jsx)(CreateJob_1.default, {}) }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/all-chats", element: (0, jsx_runtime_1.jsx)(PrivateRoute_1.default, { element: (0, jsx_runtime_1.jsx)(AllChats_1.default, {}) }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/saved-jobs", element: (0, jsx_runtime_1.jsx)(PrivateRoute_1.default, { element: (0, jsx_runtime_1.jsx)(SavedJobs_1.default, {}) }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/created-jobs", element: (0, jsx_runtime_1.jsx)(PrivateRoute_1.default, { element: (0, jsx_runtime_1.jsx)(MyJobs_1.default, {}) }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/my-applications", element: (0, jsx_runtime_1.jsx)(PrivateRoute_1.default, { element: (0, jsx_runtime_1.jsx)(MyApplications_1.default, {}) }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/job/:jobId", element: (0, jsx_runtime_1.jsx)(SingleJobPage_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/chat/:userId", element: (0, jsx_runtime_1.jsx)(ChatPage_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/applications/:jobId", element: (0, jsx_runtime_1.jsx)(PrivateRoute_1.default, { element: (0, jsx_runtime_1.jsx)(AllJobApplications_1.default, {}) }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/edit-job/:jobId", element: (0, jsx_runtime_1.jsx)(PrivateRoute_1.default, { element: (0, jsx_runtime_1.jsx)(EditJob_1.default, {}) }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/application/:jobId", element: (0, jsx_runtime_1.jsx)(PrivateRoute_1.default, { element: (0, jsx_runtime_1.jsx)(JobApplicationPage_1.default, {}) }) })] }), (0, jsx_runtime_1.jsx)(ShowFooter_1.default, { children: (0, jsx_runtime_1.jsx)(Footer_1.default, {}) })] }));
}
exports.default = App;
