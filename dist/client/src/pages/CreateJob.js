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
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const react_hot_toast_1 = __importDefault(require("react-hot-toast"));
const react_router_dom_1 = require("react-router-dom");
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
const CreateJob = () => {
    const user = (0, react_redux_1.useSelector)((state) => state.user.user);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [requirements, setRequirements] = (0, react_1.useState)([]);
    const [requirementInput, setRequirementInput] = (0, react_1.useState)("");
    const [title, setTitle] = (0, react_1.useState)("");
    const [description, setDescription] = (0, react_1.useState)("");
    const [company, setCompany] = (0, react_1.useState)("");
    const [location, setLocation] = (0, react_1.useState)("");
    const [salary, setSalary] = (0, react_1.useState)(Number);
    const handleAddRequirement = () => {
        if (requirementInput.trim() !== "") {
            setRequirements([...requirements, requirementInput]);
            setRequirementInput("");
        }
    };
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            e.preventDefault();
            const config = {
                headers: {
                    Authorization: `Bearer ${user === null || user === void 0 ? void 0 : user.token}`
                }
            };
            const { data } = yield axios_1.default.post('/api/job/create-job', { title, description, company, salary, location, requirements }, config);
            console.log(data);
            react_hot_toast_1.default.success("Job Created");
            navigate('/jobs');
        }
        catch (error) {
            console.log(error.message);
        }
    });
    const handleRemoveSkill = (requirement) => {
        setRequirements(requirements.filter((req) => req !== requirement));
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "container mx-auto p-4", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-3xl text-center\r\n       font-bold mb-8", children: "Create a New Job" }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, className: "max-w-lg mx-auto", children: [(0, jsx_runtime_1.jsxs)("label", { className: "block mb-4", children: ["Job Title:", (0, jsx_runtime_1.jsx)("input", { type: "text", className: "form-input px-4 py-3 rounded-md outline-none mt-1 block w-full", value: title, onChange: (e) => setTitle(e.target.value) })] }), (0, jsx_runtime_1.jsxs)("label", { className: "block mb-4", children: ["Job Description:", (0, jsx_runtime_1.jsx)("textarea", { className: "form-textarea mt-1 block w-full  rounded-md outline-none p-3", rows: 5, value: description, onChange: (e) => setDescription(e.target.value) })] }), (0, jsx_runtime_1.jsxs)("label", { className: "block ", children: ["Requiremsnts:", (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-center gap-2", children: [(0, jsx_runtime_1.jsx)("input", { type: "text", className: "form-input px-4 py-3 rounded-md outline-none  block w-full", value: requirementInput, onChange: (e) => setRequirementInput(e.target.value) }), (0, jsx_runtime_1.jsx)("button", { type: "button", onClick: handleAddRequirement, className: "bg-blue-500  hover:bg-blue-700 text-white font-bold py-3 px-8 rounded focus:outline-none focus:shadow-outline ", children: "Add" })] }), (0, jsx_runtime_1.jsx)("div", { className: "mt-8 flex gap-2", children: requirements.map((requirement) => ((0, jsx_runtime_1.jsxs)("span", { className: "bg-pink-200 flex gap-4  py-3 px-4 rounded-full text-center font-medium ", children: [requirement, (0, jsx_runtime_1.jsx)("button", { onClick: () => handleRemoveSkill(requirement), className: "", children: (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faXmark }) })] }))) })] }), (0, jsx_runtime_1.jsxs)("label", { className: `block ${requirements.length > 0 ? 'mt-10' : 'mt-0'}`, children: ["Salary:", (0, jsx_runtime_1.jsx)("input", { type: "number", className: "form-input mt-1 block px-4 py-3 rounded-md outline-none w-full", value: salary, onChange: (e) => setSalary(parseInt(e.target.value)) })] }), (0, jsx_runtime_1.jsxs)("label", { className: "block mb-4", children: ["Company:", (0, jsx_runtime_1.jsx)("input", { type: "text", className: "form-input mt-1 block w-full px-4 py-3 rounded-md outline-none", value: company, onChange: (e) => setCompany(e.target.value) })] }), (0, jsx_runtime_1.jsxs)("label", { className: "block mb-4", children: ["Location:", (0, jsx_runtime_1.jsx)("input", { type: "text", className: "form-input mt-1 block w-full px-4 py-3 rounded-md outline-none", value: location, onChange: (e) => setLocation(e.target.value) })] }), (0, jsx_runtime_1.jsx)("button", { type: "submit", className: "bg-blue-500  hover:bg-blue-700 text-white font-bold py-3 px-8 rounded focus:outline-none focus:shadow-outline mt-4", children: "Create Job" })] })] }));
};
exports.default = CreateJob;
