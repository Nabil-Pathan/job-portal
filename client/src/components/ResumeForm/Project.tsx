import { FormDataTypes } from "../../pages/ResumeForm";

const Project = ({ formData, setFormData }: { formData: FormDataTypes; setFormData: (value: FormDataTypes) => void }) => {
  return (
    <div className="container mt-4 mx-auto p-4">
      <form className="flex flex-col items-center justify-center gap-4">
        <div className="flex items-center md:flex-row flex-col gap-3">
          <label className="md:text-xl">Name of project</label>
          <input
            type="text"
            className="px-4 py-2 rounded-md outline-none"
            id="name"
            value={formData.proj1_title}
            onChange={(e) => {
              setFormData({ ...formData, proj1_title: e.target.value });
            }}
          />
        </div>

        <div className="flex items-center md:flex-row flex-col gap-3">
          <label className="md:text-xl">Link to project</label>
          <input
            type="text"
            className="px-4 py-2 rounded-md outline-none"
            id="phone"
            value={formData.proj1_link}
            onChange={(e) => {
              setFormData({ ...formData, proj1_link: e.target.value });
            }}
          />
        </div>
        <div className="flex items-center md:flex-row flex-col gap-3">
          <label className="md:text-xl">Description about project</label>
          <input
            type="text"
            className="px-4 py-2 rounded-md outline-none"
            id="github"
            value={formData.proj1_desc}
            onChange={(e) => {
              setFormData({ ...formData, proj1_desc: e.target.value });
            }}
          />
        </div>
        <hr className="my-4 w-full" />
        <div className="flex items-center md:flex-row flex-col gap-3">
          <label className="md:text-xl">Enter your Second Project Name</label>
          <input
            type="text"
            className="px-4 py-2 rounded-md outline-none"
            id="name"
            value={formData.proj2_title}
            onChange={(e) => {
              setFormData({ ...formData, proj2_title: e.target.value });
            }}
          />
        </div>
        <div className="flex items-center md:flex-row flex-col gap-3">
          <label className="md:text-xl">Link of second project</label>
          <input
            type="text"
            className="px-4 py-2 rounded-md outline-none"
            id="Email"
            value={formData.proj2_link}
            onChange={(e) => {
              setFormData({ ...formData, proj2_link: e.target.value });
            }}
          />
        </div>

        <div className="flex items-center md:flex-row flex-col gap-3">
          <label className="md:text-xl">Description</label>
          <input
            type="text"
            className="px-4 py-2 rounded-md outline-none"
            id="github"
            value={formData.proj2_desc}
            onChange={(e) => {
              setFormData({ ...formData, proj2_desc: e.target.value });
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Project;
