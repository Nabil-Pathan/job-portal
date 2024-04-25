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
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
const react_hot_toast_1 = __importDefault(require("react-hot-toast"));
const react_redux_2 = require("react-redux");
const userslice_1 = require("../redux/userslice");
const storage_1 = require("firebase/storage");
const firebase_1 = require("../firebase");
const DropDown_1 = __importDefault(require("../components/Extra/DropDown"));
const ProfilePage = ({ open }) => {
    const user = (0, react_redux_1.useSelector)((state) => state.user.user);
    const fileRef = (0, react_1.useRef)(null);
    const dispatch = (0, react_redux_2.useDispatch)();
    const [formData, setFormData] = (0, react_1.useState)({
        name: (user === null || user === void 0 ? void 0 : user.name) || "",
        email: (user === null || user === void 0 ? void 0 : user.email) || "",
        password: "",
        pic: ""
    });
    const [file, setFile] = (0, react_1.useState)(null);
    const [fileUploading, setFileUploading] = (0, react_1.useState)(false);
    const [filePer, setFilePer] = (0, react_1.useState)(Number);
    const [fileError, setFileError] = (0, react_1.useState)(Error);
    const handleChange = (e) => {
        setFormData(Object.assign(Object.assign({}, formData), { [e.target.name]: e.target.value }));
    };
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        // Update User Profile
        try {
            e.preventDefault();
            const config = {
                headers: {
                    Authorization: `Bearer ${user === null || user === void 0 ? void 0 : user.token}`
                }
            };
            const { data } = yield axios_1.default.post(`/api/user/update-profile/${user === null || user === void 0 ? void 0 : user._id}`, formData, config);
            const { _id, name, email, pic, savedJobs } = data.user;
            dispatch((0, userslice_1.setUser)({ _id, name, email, pic, token: data.token, savedJobs }));
            react_hot_toast_1.default.success("Profile Updated");
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
                setFormData(Object.assign(Object.assign({}, formData), { pic: downloadUrl }));
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
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: "container mx-auto p-4", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex justify-end px-4 gap-4 ", children: (0, jsx_runtime_1.jsx)(DropDown_1.default, { open: open }) }), (0, jsx_runtime_1.jsx)("form", { onSubmit: handleSubmit, children: (0, jsx_runtime_1.jsxs)("div", { className: "flex md:flex-row items-center justify-center flex-col ", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex-1 flex justify-center p-4", children: [(0, jsx_runtime_1.jsx)("img", { onClick: () => fileRef.current && fileRef.current.click(), className: "md:h-[400px] cursor-pointer", src: (user === null || user === void 0 ? void 0 : user.pic) || formData.pic, alt: "" }), fileError && (0, jsx_runtime_1.jsx)("p", { className: "text-red-500  mt-4" }), fileUploading && (0, jsx_runtime_1.jsx)("p", {}), (0, jsx_runtime_1.jsx)("input", { onChange: handleFileChange, type: "file", ref: fileRef, hidden: true, accept: 'image/*' }), filePer && filePer > 0 ? (0, jsx_runtime_1.jsx)("p", { className: "text-center" }) : (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {})] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex-1 md:p-6", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "name", className: "block  font-medium text-gray-700", children: "Name" }), (0, jsx_runtime_1.jsx)("input", { type: "text", id: "name", name: "name", className: "mt-1 block w-full border border-gray-300 px-4 py-3 outline-none rounded-md shadow-sm", placeholder: "Your Full Name", value: formData.name, onChange: handleChange })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-4", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "name", className: "block  font-medium text-gray-700", children: "Email" }), (0, jsx_runtime_1.jsx)("input", { type: "email", id: "email", name: "email", className: "mt-1 block w-full border border-gray-300 px-4 py-3 outline-none rounded-md shadow-sm ", placeholder: "Your Full Name", value: formData.email, onChange: handleChange })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-4", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "name", className: "block  font-medium text-gray-700", children: "Password" }), (0, jsx_runtime_1.jsx)("input", { type: "password", id: "password", name: "password", className: "mt-1 block w-full border border-gray-300 px-4 py-3 outline-none rounded-md shadow-sm ", placeholder: "Change Password", onChange: handleChange })] }), (0, jsx_runtime_1.jsx)("button", { type: "submit", className: " mt-6 bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600", children: "Update" })] })] }) })] }) }));
};
exports.default = ProfilePage;
