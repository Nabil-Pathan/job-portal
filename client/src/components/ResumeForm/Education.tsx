import { FormDataTypes } from "../../pages/ResumeForm";


const Education = ({ formData, setFormData }: { formData: FormDataTypes; setFormData: (value: FormDataTypes) => void }) => {
  return (
    <div className="flex md:w-[60%] w-[100%] flex-col flex-start mt-4 bg-white px-4 py-12">
      <form className=" flex  md:flex-row flex-col  w-full gap-3 ">

        <div className="flex-1">
        <div className="flex  flex-col  gap-3">
          <label className="md:text-xl"> First Institute name</label>
          <input
            type="text"
            className="px-4 py-2 bg-gray-200 rounded-md outline-none"
            id="name"
            value={formData.edu1_school}
            onChange={(e) => {
              setFormData({ ...formData, edu1_school: e.target.value });
            }}
          />
        </div>
        <div className="flex  flex-col gap-3">
          <label className="md:text-xl">Year you graduated</label>
          <input
            type="email"
            className="px-4 py-2 bg-gray-200 rounded-md outline-none"
            id="Email"
            value={formData.edu1_year}
            onChange={(e) => {
              setFormData({ ...formData, edu1_year: e.target.value });
            }}
          />
        </div>
        <div className="flex  flex-col  gap-3">
          <label className="md:text-xl">Degree</label>
          <input
            type="text"
            className="px-4 py-2 rounded-md bg-gray-200 outline-none"
            id="phone"
            value={formData.edu1_qualification}
            onChange={(e) => {
              setFormData({ ...formData, edu1_qualification: e.target.value });
            }}
          />
        </div>

        <div className="flex  flex-col  gap-3">
          <label className="md:text-xl">Description</label>
          <textarea
            className="px-4 py-2 text-area bg-gray-200 rounded-md outline-none"
            id="github"
            value={formData.edu1_desc}
            onChange={(e) => {
              setFormData({ ...formData, edu1_desc: e.target.value });
            }}
          />
        </div>

        </div>


{/* Second Institute Starts */}

        <div className="flex-1">
        <div className="flex  flex-col  gap-3">
          <label className="md:text-xl"> Second Institute name</label>
          <input
            type="text"
            className="px-4 py-2 bg-gray-200 rounded-md outline-none"
            id="name"
            value={formData.edu2_school}
            onChange={(e) => {
              setFormData({ ...formData, edu2_school: e.target.value });
            }}
          />
        </div>
        <div className="flex  flex-col gap-3">
          <label className="md:text-xl">Year of graduated </label>
          <input
            type="email"
            className="px-4 py-2 rounded-md bg-gray-200 outline-none"
            id="Email"
            value={formData.edu2_year}
            onChange={(e) => {
              setFormData({ ...formData, edu2_year: e.target.value });
            }}
          />
        </div>
        <div className="flex  flex-col gap-3">
          <label className="md:text-xl">Degree</label>
          <input
            type="text"
            className="px-4 py-2 rounded-md bg-gray-200 outline-none"
            id="phone"
            value={formData.edu2_qualification}
            onChange={(e) => {
              setFormData({ ...formData, edu2_qualification: e.target.value });
            }}
          />
        </div>

        <div className="flex  flex-col gap-3">
          <label className="md:text-xl"> description</label>
          <textarea
            className="px-4 py-2 text-area bg-gray-200 rounded-md outline-none"
            id="github"
            value={formData.edu2_desc}
            onChange={(e) => {
              setFormData({ ...formData, edu2_desc: e.target.value });
            }}
          />
        </div>

        </div>
      </form>
    </div>
  );
};

export default Education;
