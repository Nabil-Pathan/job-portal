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
require("./DeleteJobModal.css");
const axios_1 = __importDefault(require("axios"));
const react_hot_toast_1 = require("react-hot-toast");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const DeleteJobModal = ({ setDeleteModal, jobId }) => {
    const user = (0, react_redux_1.useSelector)((state) => state.user.user);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleDeletePost = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user === null || user === void 0 ? void 0 : user.token}`
                }
            };
            setDeleteModal(false);
            const { data } = yield axios_1.default.delete(`/api/job/delete-job/${jobId}`, config);
            react_hot_toast_1.toast.success('Job Deleted');
            console.log(data);
            navigate('/created-jobs');
            console.log('Job deleted');
        }
        catch (error) {
            console.log(error.message);
        }
    });
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("div", { className: "modal-wrapper text-black", children: (0, jsx_runtime_1.jsxs)("div", { className: "modal-container flex flex-col gap-2 items-center justify-center", children: [(0, jsx_runtime_1.jsx)("button", { className: "absolute text-3xl top-3 right-3 px-2 py-1 rounded-md text-gray-700 bg-gray-300 hover:bg-gray-200 hover:text-gray-600", onClick: () => setDeleteModal(false), children: "X" }), (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { className: 'h-[60px] w-[60px]', icon: free_solid_svg_icons_1.faTrash }), (0, jsx_runtime_1.jsxs)("div", { className: 'mt-6', children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-2xl text-center font-bold", children: "Are You Sure You Want to Delete the Job ?" }), (0, jsx_runtime_1.jsx)("button", { className: "mt-4 bg-red-700 w-full rounded-md hover:bg-red-500 font-bold text-white p-3", onClick: handleDeletePost, children: "Delete" }), (0, jsx_runtime_1.jsx)("button", { className: "mt-4 bg-gray-300 w-full hover:bg-gray-500 font-bold p-3 rounded-md shadow-lg", onClick: () => setDeleteModal(false), children: "Cancel" })] })] }) }) }));
};
exports.default = DeleteJobModal;
