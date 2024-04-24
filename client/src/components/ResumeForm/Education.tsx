import { FormDataTypes } from "../../pages/ResumeForm";

const Education = ({ formData, setFormData }: { formData: FormDataTypes; setFormData: (value: FormDataTypes) => void }) => {
  return (
    <div className="container mx-auto mt-4 md:p-4">
      <form className="md:grid flex  flex-col md:gap-4 gap-3 md:grid-cols-2">
        <div className="flex items-center md:flex-row flex-col justify-center gap-3">
          <label className="md:text-xl"> First Institute name</label>
          <input
            type="text"
            className="px-4 py-2 rounded-md outline-none"
            id="name"
            value={formData.edu1_school}
            onChange={(e) => {
              setFormData({ ...formData, edu1_school: e.target.value });
            }}
          />
        </div>
        <div className="flex items-center md:flex-row flex-col justify-center gap-3">
          <label className="md:text-xl">Year you graduated</label>
          <input
            type="email"
            className="px-4 py-2 rounded-md outline-none"
            id="Email"
            value={formData.edu1_year}
            onChange={(e) => {
              setFormData({ ...formData, edu1_year: e.target.value });
            }}
          />
        </div>
        <div className="flex items-center md:flex-row flex-col justify-center gap-3">
          <label className="md:text-xl">Degree</label>
          <input
            type="text"
            className="px-4 py-2 rounded-md outline-none"
            id="phone"
            value={formData.edu1_qualification}
            onChange={(e) => {
              setFormData({ ...formData, edu1_qualification: e.target.value });
            }}
          />
        </div>

        <div className="flex items-center md:flex-row flex-col justify-center gap-3">
          <label className="md:text-xl">Description</label>
          <input
            type="text"
            className="px-4 py-2 rounded-md outline-none"
            id="github"
            value={formData.edu1_desc}
            onChange={(e) => {
              setFormData({ ...formData, edu1_desc: e.target.value });
            }}
          />
        </div>

        <hr className="col-span-2 my-4" />

        <div className="flex items-center md:flex-row flex-col justify-center gap-3">
          <label className="md:text-xl"> Second Institute name</label>
          <input
            type="text"
            className="px-4 py-2 rounded-md outline-none"
            id="name"
            value={formData.edu2_school}
            onChange={(e) => {
              setFormData({ ...formData, edu2_school: e.target.value });
            }}
          />
        </div>
        <div className="flex items-center md:flex-row flex-col justify-center gap-3">
          <label className="md:text-xl">Year of graduated </label>
          <input
            type="email"
            className="px-4 py-2 rounded-md outline-none"
            id="Email"
            value={formData.edu2_year}
            onChange={(e) => {
              setFormData({ ...formData, edu2_year: e.target.value });
            }}
          />
        </div>
        <div className="flex items-center md:flex-row flex-col justify-center gap-3">
          <label className="md:text-xl">Degree</label>
          <input
            type="text"
            className="px-4 py-2 rounded-md outline-none"
            id="phone"
            value={formData.edu2_qualification}
            onChange={(e) => {
              setFormData({ ...formData, edu2_qualification: e.target.value });
            }}
          />
        </div>

        <div className="flex items-center md:flex-row flex-col   justify-center gap-3">
          <label className="md:text-xl"> description</label>
          <input
            type="text"
            className="px-4 py-2 rounded-md outline-none"
            id="github"
            value={formData.edu2_desc}
            onChange={(e) => {
              setFormData({ ...formData, edu2_desc: e.target.value });
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Education;
