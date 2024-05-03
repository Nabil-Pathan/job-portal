import  { useState } from "react";
import Education from "../components/ResumeForm/Education";
import Experiences from "../components/ResumeForm/Experiences";
import PersonalDetails from "../components/ResumeForm/PersonalDetails";
import Project from "../components/ResumeForm/Project";
import Extras from "../components/ResumeForm/Extras";
import axios from "axios";
import {saveAs} from "file-saver"
import Success from "../components/ResumeForm/Success";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export interface FormDataTypes {
    name: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    skills: string;
  
    exp1_org: string;
    exp1_pos: string;
    exp1_desc: string;
    exp1_dur: string;
    exp2_org: string;
    exp2_pos: string;
    exp2_desc: string;
    exp2_dur: string;
  
    proj1_title: string;
    proj1_link: string;
    proj1_desc: string;
    proj2_title: string;
    proj2_link: string;
    proj2_desc: string;
  
    edu1_school: string;
    edu1_year: string;
    edu1_qualification: string;
    edu1_desc: string;
    edu2_school: string;
    edu2_year: string;
    edu2_qualification: string;
    edu2_desc: string;
  
    extra_1: string;
    extra_2: string;
  }

const ResumeForm = () => {

   const user = useSelector((state : RootState)=> state.user.user)


  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState<FormDataTypes>({
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

  const [page, setPage] = useState(0);
  const FormTitle = [
    "Personal Details",
    "Education",
    "Experience",
    "Projects",
    "Extras",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <PersonalDetails formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Education formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Experiences formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <Project formData={formData} setFormData={setFormData} />;
    } else {
      return <Extras formData={formData} setFormData={setFormData} />;
    }
  };


  const createResume = async () =>{
    try {
       const config = {
         headers : {
           Authorization : `Bearer ${user?.token}`
         }
       }
         axios.post("/api/user/create-resume", formData, config)
                .then(() =>
                  axios.get("api/user/fetch-pdf", {
                    responseType: "blob",
                  })
                )
                .then((res) => {
                  const pdfBlob = new Blob([res.data], {
                    type: "application/pdf",
                  });
                  setSuccess(true && res.status === 200);
                  saveAs(pdfBlob, "Resume.pdf");
                });
    } catch (error : any) {
        console.log(error.message);
    }
  }
  return (
    <div className="md:min-h-screen md:px-4 py-8 ">
      <div className="flex container  items-center justify-center mt-2">
        <h1 className="text-center text-3xl font-medium">{FormTitle[page]}</h1>
      </div>
      <div className="progressbar">
        <div
          style={{
            width:
              page === 0
                ? "20%"
                : page === 1
                ? "40%"
                : page === 2
                ? "60%"
                : page === 3
                ? "80%"
                : "100%",
          }}
        ></div>
      </div>
      <div
      className=" flex justify-center items-center w-full"
      >{PageDisplay()}</div>
      <div className="flex justify-center gap-3 py-5">
        <button
          className="bg-blue-500 text-white font-bold px-4 py-2 rounded-md"
          disabled={page === 0}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >
          Prev
        </button>
        <button
          className="bg-blue-500 text-white font-bold px-4 py-2 rounded-md"
          onClick={() => {
            if (page === FormTitle.length - 1) {
                createResume()
            } else {
              setPage((currPage) => currPage + 1);
            }
          }}
        >
          {page === FormTitle.length - 1 ? "Download Pdf" : "Next"}
        </button>
      </div>
      {success && <Success />}
    </div>
  );
};

export default ResumeForm;
