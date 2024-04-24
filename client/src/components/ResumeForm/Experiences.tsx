import { FormDataTypes } from "../../pages/ResumeForm";

const Experiences = ({ formData, setFormData }: { formData: FormDataTypes; setFormData: (value: FormDataTypes) => void }) => {
  return (
    <div className="container mt-4 mx-auto p-4">
      <form className="flex flex-col items-center justify-center gap-4">
        <div className="flex items-center md:flex-row flex-col gap-3">
          <label className="md:text-xl"> First company</label>
          <input
            type="text"
            className="px-4 py-2 rounded-md outline-none"
            id="name"
            value={formData.exp1_org}
            onChange={(e) => {
              setFormData({ ...formData, exp1_org: e.target.value });
            }}
          />
        </div>

        <div className="flex items-center md:flex-row flex-col gap-3">
          <label className="md:text-xl">Designation</label>
          <input
            type="text"
            className="px-4 py-2 rounded-md outline-none"
            id="phone"
            value={formData.exp1_pos}
            onChange={(e) => {
              setFormData({ ...formData, exp1_pos: e.target.value });
            }}
          />
        </div>
        <div className="flex items-center md:flex-row flex-col gap-3">
          <label className="md:text-xl">Duration</label>
          <input
            type="email"
            className="px-4 py-2 rounded-md outline-none"
            id="Email"
            value={formData.exp1_dur}
            onChange={(e) => {
              setFormData({ ...formData, exp1_dur: e.target.value });
            }}
          />
        </div>
        <div className="flex items-center md:flex-row flex-col gap-3">
          <label className="md:text-xl">Job description</label>
          <input
            type="text"
            className="px-4 py-2 rounded-md outline-none"
            id="github"
            value={formData.exp1_desc}
            onChange={(e) => {
              setFormData({ ...formData, exp1_desc: e.target.value });
            }}
          />
        </div>
        <hr className="my-4 w-full" />
        <div className="flex items-center md:flex-row flex-col gap-3">
          <label className="md:text-xl">Second company</label>
          <input
            type="text"
            className="px-4 py-2 rounded-md outline-none"
            id="name"
            value={formData.exp2_org}
            onChange={(e) => {
              setFormData({ ...formData, exp2_org: e.target.value });
            }}
          />
        </div>
        <div className="flex items-center md:flex-row flex-col gap-3">
          <label className="md:text-xl">Designation</label>
          <input
            type="text"
            className="px-4 py-2 rounded-md outline-none"
            id="Email"
            value={formData.exp2_pos}
            onChange={(e) => {
              setFormData({ ...formData, exp2_pos: e.target.value });
            }}
          />
        </div>
        <div className="flex items-center md:flex-row flex-col gap-3">
          <label className="md:text-xl">Duration</label>
          <input
            type="text"
            className="px-4 py-2 rounded-md outline-none"
            id="phone"
            value={formData.exp2_dur}
            onChange={(e) => {
              setFormData({ ...formData, exp2_dur: e.target.value });
            }}
          />
        </div>
        <div className="flex items-center md:flex-row flex-col gap-3">
          <label className="md:text-xl">Job description</label>
          <input
            type="text"
            className="px-4 py-2 rounded-md outline-none"
            id="github"
            value={formData.exp2_desc}
            onChange={(e) => {
              setFormData({ ...formData, exp2_desc: e.target.value });
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Experiences;
