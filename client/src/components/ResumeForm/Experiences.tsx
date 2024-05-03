import { FormDataTypes } from "../../pages/ResumeForm";

const Experiences = ({ formData, setFormData }: { formData: FormDataTypes; setFormData: (value: FormDataTypes) => void }) => {
  return (
    <div className="flex md:w-[60%] w-[100%] flex-col flex-start mt-4 bg-white px-4 py-12">
      <form className="flex md:flex-row flex-col w-full gap-3">

        <div className="flex-1">
          <div className="flex flex-col gap-3">
            <label className="md:text-xl">First company</label>
            <input
              type="text"
              className="px-4 py-2 bg-gray-200 rounded-md outline-none"
              id="name"
              value={formData.exp1_org}
              onChange={(e) => {
                setFormData({ ...formData, exp1_org: e.target.value });
              }}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="md:text-xl">Designation</label>
            <input
              type="text"
              className="px-4 py-2 bg-gray-200 rounded-md outline-none"
              id="phone"
              value={formData.exp1_pos}
              onChange={(e) => {
                setFormData({ ...formData, exp1_pos: e.target.value });
              }}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="md:text-xl">Duration</label>
            <input
              type="text"
              className="px-4 py-2 bg-gray-200 rounded-md outline-none"
              id="Email"
              value={formData.exp1_dur}
              onChange={(e) => {
                setFormData({ ...formData, exp1_dur: e.target.value });
              }}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="md:text-xl">Job description</label>
            <textarea
              className="px-4 py-2 text-area bg-gray-200 rounded-md outline-none"
              id="github"
              value={formData.exp1_desc}
              onChange={(e) => {
                setFormData({ ...formData, exp1_desc: e.target.value });
              }}
            />
          </div>
        </div>

        <div className="flex-1">
          <div className="flex flex-col gap-3">
            <label className="md:text-xl">Second company</label>
            <input
              type="text"
              className="px-4 py-2 bg-gray-200 rounded-md outline-none"
              id="name"
              value={formData.exp2_org}
              onChange={(e) => {
                setFormData({ ...formData, exp2_org: e.target.value });
              }}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="md:text-xl">Designation</label>
            <input
              type="text"
              className="px-4 py-2 bg-gray-200 rounded-md outline-none"
              id="Email"
              value={formData.exp2_pos}
              onChange={(e) => {
                setFormData({ ...formData, exp2_pos: e.target.value });
              }}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="md:text-xl">Duration</label>
            <input
              type="text"
              className="px-4 py-2 bg-gray-200 rounded-md outline-none"
              id="phone"
              value={formData.exp2_dur}
              onChange={(e) => {
                setFormData({ ...formData, exp2_dur: e.target.value });
              }}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="md:text-xl">Job description</label>
            <textarea
              className="px-4 py-2 text-area bg-gray-200 rounded-md outline-none"
              id="github"
              value={formData.exp2_desc}
              onChange={(e) => {
                setFormData({ ...formData, exp2_desc: e.target.value });
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Experiences;
