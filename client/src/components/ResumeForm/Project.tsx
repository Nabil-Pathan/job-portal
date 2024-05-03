import { FormDataTypes } from "../../pages/ResumeForm";

const Project = ({ formData, setFormData }: { formData: FormDataTypes; setFormData: (value: FormDataTypes) => void }) => {
  return (
    <div className="flex md:w-[60%] w-[100%] flex-col flex-start mt-4 bg-white px-4 py-12">
      <form className="flex md:flex-row flex-col w-full gap-3">

        <div className="flex-1">
          <div className="flex flex-col gap-3">
            <label className="md:text-xl">First Project Name</label>
            <input
              type="text"
              className="px-4 py-2 bg-gray-200 rounded-md outline-none"
              id="name"
              value={formData.proj1_title}
              onChange={(e) => {
                setFormData({ ...formData, proj1_title: e.target.value });
              }}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="md:text-xl">Link to project</label>
            <input
              type="text"
              className="px-4 py-2 bg-gray-200 rounded-md outline-none"
              id="phone"
              value={formData.proj1_link}
              onChange={(e) => {
                setFormData({ ...formData, proj1_link: e.target.value });
              }}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="md:text-xl">Description</label>
            <textarea
              className="px-4 py-2 text-area bg-gray-200 rounded-md outline-none"
              id="github"
              value={formData.proj1_desc}
              onChange={(e) => {
                setFormData({ ...formData, proj1_desc: e.target.value });
              }}
            />
          </div>
        </div>

        <div className="flex-1">
          <div className="flex flex-col gap-3">
            <label className="md:text-xl">Second Project Name</label>
            <input
              type="text"
              className="px-4 py-2 bg-gray-200 rounded-md outline-none"
              id="name"
              value={formData.proj2_title}
              onChange={(e) => {
                setFormData({ ...formData, proj2_title: e.target.value });
              }}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="md:text-xl">Link of project</label>
            <input
              type="text"
              className="px-4 py-2 bg-gray-200 rounded-md outline-none"
              id="Email"
              value={formData.proj2_link}
              onChange={(e) => {
                setFormData({ ...formData, proj2_link: e.target.value });
              }}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="md:text-xl">Description</label>
            <textarea
              className="px-4 py-2 text-area bg-gray-200 rounded-md outline-none"
              id="github"
              value={formData.proj2_desc}
              onChange={(e) => {
                setFormData({ ...formData, proj2_desc: e.target.value });
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Project;
