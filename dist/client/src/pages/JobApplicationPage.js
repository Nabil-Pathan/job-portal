"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
const react_router_dom_2 = require("react-router-dom");
const firebase_1 = require("../firebase");
const storage_1 = require("firebase/storage");
const react_hot_toast_1 = __importDefault(require("react-hot-toast"));
const JobApplicationPage = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const user = (0, react_redux_1.useSelector)((state) => state.user.user);
    const params = (0, react_router_dom_2.useParams)();
    const [name, setName] = (0, react_1.useState)("");
    const [email, setEmail] = (0, react_1.useState)("");
    const [experience, setExperience] = (0, react_1.useState)("");
    const [resume, setResume] = (0, react_1.useState)("");
    const [file, setFile] = (0, react_1.useState)(null);
    const [coverLetter, setCoverLetter] = (0, react_1.useState)("");
    const [role, setRole] = (0, react_1.useState)("");
    const [fileUploading, setFileUploading] = (0, react_1.useState)(false);
    const [filePer, setFilePer] = (0, react_1.useState)(Number);
    const [fileError, setFileError] = (0, react_1.useState)(Error);
    const fetchJob = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { data } = yield axios_1.default.get(`/api/job/get-job/${params.jobId}`);
            setRole(data.job.title);
        }
        catch (error) {
            console.log(error.message);
        }
    });
    (0, react_1.useEffect)(() => {
        fetchJob();
    }, []);
    const ApplyJob = (e) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            e.preventDefault();
            const config = {
                headers: {
                    Authorization: `Bearer ${user === null || user === void 0 ? void 0 : user.token}`
                }
            };
            const { data } = yield axios_1.default.post(`/api/job/apply/${params.jobId}`, { name, email, experience, resume, role, coverLetter }, config);
            console.log(data);
            react_hot_toast_1.default.success("Applied Successfully");
            navigate('/jobs');
        }
        catch (error) {
            console.log(error.message);
        }
    });
    const handleFileUpload = (file) => {
        setFileUploading(true);
        const storage = (0, storage_1.getStorage)(firebase_1.app);
        const fileName = new Date().getTime() + file.name;
        const storageRef = (0, storage_1.ref)(storage, fileName);
        const uploadTask = (0, storage_1.uploadBytesResumable)(storageRef, file);
        uploadTask.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(progress);
            setFilePer(Math.round(progress));
        }, (error) => {
            setFileError(error);
            setFileUploading(false);
            console.log(error);
        }, () => {
            (0, storage_1.getDownloadURL)(uploadTask.snapshot.ref).then((downloadUrl) => {
                setResume(downloadUrl);
                setFileUploading(false);
            });
        });
    };
    const handleFileChange = (e) => {
        var _a;
        const file = (_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            setFile(file);
        }
    };
    (0, react_1.useEffect)(() => {
        if (file) {
            handleFileUpload(file);
        }
    }, [file]);
    return ((0, jsx_runtime_1.jsx)("div", { className: ' flex items-center justify-center md:p-5 p-2', children: (0, jsx_runtime_1.jsxs)("div", { className: "bg-white md:w-[60%]  rounded-lg shadow-lg p-8  w-full", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-3xl font-bold text-center mb-6", children: "Apply for Job" }), (0, jsx_runtime_1.jsxs)("form", { className: "space-y-4", onSubmit: ApplyJob, children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "name", className: "block text-sm font-medium text-gray-700", children: "Full Name" }), (0, jsx_runtime_1.jsx)("input", { type: "text", id: "name", name: "name", className: "mt-1 block w-full border border-gray-300 px-4 py-3 outline-none rounded-md shadow-sm sm:text-sm", placeholder: "Your Full Name", required: true, onChange: (e) => setName(e.target.value) })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700", children: "Email Address" }), (0, jsx_runtime_1.jsx)("input", { type: "email", id: "email", name: "email", className: "mt-1 block w-full border border-gray-300 px-4 py-3 outline-none rounded-md shadow-sm sm:text-sm", placeholder: "Your Email Address", required: true, onChange: (e) => setEmail(e.target.value) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex gap-4 w-full", children: [(0, jsx_runtime_1.jsxs)("div", { className: "w-full", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "name", className: "block text-sm font-medium text-gray-700", children: "Role" }), (0, jsx_runtime_1.jsx)("input", { type: "text", id: "role", name: "role", className: "mt-1 block w-full border border-gray-300 px-4 py-3 outline-none rounded-md shadow-sm sm:text-sm", value: role, required: true })] }), (0, jsx_runtime_1.jsxs)("div", { className: "w-full", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "name", className: "block text-sm font-medium text-gray-700", children: "Experience" }), (0, jsx_runtime_1.jsx)("input", { type: "number", id: "experience", name: "experience", className: "mt-1 block w-full border border-gray-300 px-4 py-3 outline-none rounded-md shadow-sm sm:text-sm", required: true, onChange: (e) => setExperience(e.target.value) })] })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "resume", className: "block text-sm font-medium text-gray-700", children: "Upload Resume (PDF)" }), (0, jsx_runtime_1.jsx)("input", { type: "file", id: "resume", name: "resume", accept: ".pdf", className: "mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm", onChange: handleFileChange }), fileError && (0, jsx_runtime_1.jsx)("p", { className: "text-red-500 mt-4" }), filePer && (0, jsx_runtime_1.jsx)("p", {}), fileUploading && (0, jsx_runtime_1.jsx)("p", {})] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "coverLetter", className: "block text-sm font-medium text-gray-700", children: "Cover Letter" }), (0, jsx_runtime_1.jsx)("textarea", { id: "coverLetter", name: "coverLetter", rows: 4, className: "mt-1 block w-full border border-gray-300 px-4 py-3 outline-none rounded-md shadow-sm sm:text-sm", placeholder: "Your Cover Letter (optional)", onChange: (e) => setCoverLetter(e.target.value) })] }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("button", { type: "submit", className: "w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600", children: "Submit Application" }) })] })] }) }));
};
exports.default = JobApplicationPage;
