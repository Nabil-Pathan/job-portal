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
const react_1 = require("react");
const Education_1 = __importDefault(require("../components/ResumeForm/Education"));
const Experiences_1 = __importDefault(require("../components/ResumeForm/Experiences"));
const PersonalDetails_1 = __importDefault(require("../components/ResumeForm/PersonalDetails"));
const Project_1 = __importDefault(require("../components/ResumeForm/Project"));
const Extras_1 = __importDefault(require("../components/ResumeForm/Extras"));
const axios_1 = __importDefault(require("axios"));
const file_saver_1 = require("file-saver");
const Success_1 = __importDefault(require("../components/ResumeForm/Success"));
const react_redux_1 = require("react-redux");
const ResumeForm = () => {
    const user = (0, react_redux_1.useSelector)((state) => state.user.user);
    const [success, setSuccess] = (0, react_1.useState)(false);
    const [formData, setFormData] = (0, react_1.useState)({
        name: "",
        email: "",
        phone: "",
        linkedin: "",
        github: "",
        skills: "",
        exp1_org: "",
        exp1_pos: "",
        exp1_desc: "",
        exp1_dur: "",
        exp2_org: "",
        exp2_pos: "",
        exp2_desc: "",
        exp2_dur: "",
        proj1_title: "",
        proj1_link: "",
        proj1_desc: "",
        proj2_title: "",
        proj2_link: "",
        proj2_desc: "",
        edu1_school: "",
        edu1_year: "",
        edu1_qualification: "",
        edu1_desc: "",
        edu2_school: "",
        edu2_year: "",
        edu2_qualification: "",
        edu2_desc: "",
        extra_1: "",
        extra_2: "",
    });
    const [page, setPage] = (0, react_1.useState)(0);
    const FormTitle = [
        "Personal Details",
        "Education",
        "Experience",
        "Projects",
        "Extras",
    ];
    const PageDisplay = () => {
        if (page === 0) {
            return (0, jsx_runtime_1.jsx)(PersonalDetails_1.default, { formData: formData, setFormData: setFormData });
        }
        else if (page === 1) {
            return (0, jsx_runtime_1.jsx)(Education_1.default, { formData: formData, setFormData: setFormData });
        }
        else if (page === 2) {
            return (0, jsx_runtime_1.jsx)(Experiences_1.default, { formData: formData, setFormData: setFormData });
        }
        else if (page === 3) {
            return (0, jsx_runtime_1.jsx)(Project_1.default, { formData: formData, setFormData: setFormData });
        }
        else {
            return (0, jsx_runtime_1.jsx)(Extras_1.default, { formData: formData, setFormData: setFormData });
        }
    };
    const createResume = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user === null || user === void 0 ? void 0 : user.token}`
                }
            };
            axios_1.default.post("/api/user/create-resume", formData, config)
                .then(() => axios_1.default.get("api/user/fetch-pdf", {
                responseType: "blob",
            }))
                .then((res) => {
                const pdfBlob = new Blob([res.data], {
                    type: "application/pdf",
                });
                setSuccess(true && res.status === 200);
                (0, file_saver_1.saveAs)(pdfBlob, "Resume.pdf");
            });
        }
        catch (error) {
            console.log(error.message);
        }
    });
    return ((0, jsx_runtime_1.jsxs)("div", { className: "md:min-h-screen md:px-4 py-8 ", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex container  items-center justify-center mt-2", children: (0, jsx_runtime_1.jsx)("h1", { className: "text-center text-3xl font-medium", children: FormTitle[page] }) }), (0, jsx_runtime_1.jsx)("div", { className: "progressbar", children: (0, jsx_runtime_1.jsx)("div", { style: {
                        width: page === 0
                            ? "20%"
                            : page === 1
                                ? "40%"
                                : page === 2
                                    ? "60%"
                                    : page === 3
                                        ? "80%"
                                        : "100%",
                    } }) }), (0, jsx_runtime_1.jsx)("div", { className: " flex justify-center items-center w-full", children: PageDisplay() }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-center gap-3 py-5", children: [(0, jsx_runtime_1.jsx)("button", { className: "bg-blue-500 text-white font-bold px-4 py-2 rounded-md", disabled: page === 0, onClick: () => {
                            setPage((currPage) => currPage - 1);
                        }, children: "Prev" }), (0, jsx_runtime_1.jsx)("button", { className: "bg-blue-500 text-white font-bold px-4 py-2 rounded-md", onClick: () => {
                            if (page === FormTitle.length - 1) {
                                createResume();
                            }
                            else {
                                setPage((currPage) => currPage + 1);
                            }
                        }, children: page === FormTitle.length - 1 ? "Download Pdf" : "Next" })] }), success && (0, jsx_runtime_1.jsx)(Success_1.default, {})] }));
};
exports.default = ResumeForm;
