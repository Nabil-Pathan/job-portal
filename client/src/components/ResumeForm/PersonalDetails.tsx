import { FormDataTypes } from "../../pages/ResumeForm";

const PersonalDetails = ({ formData, setFormData }: { formData: FormDataTypes; setFormData: (value: FormDataTypes) => void }) => {
  return (
    <div className="container mt-6 mx-auto">
      <form className="flex flex-col gap-4 w-[100%]">
        <div className="flex items-center w-full justify-center gap-3">
          <label className="text-xl">Name</label>
          <input
            type="text"
            className="px-4 py-2 rounded-md  outline-none"
            id="name"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
          />
        </div>
        <div className="flex items-center justify-center gap-3">
          <label className="text-xl">Email</label>
          <input
            type="email"
            className="px-4 py-2 rounded-md outline-none"
            id="Email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />
        </div>
        <div className="flex items-center justify-center gap-3">
          <label className="text-xl">Phone</label>
          <input
            type="text"
            className="px-4 py-2 outline-none rounded-md"
            id="phone"
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
            }}
          />
        </div>

        <div className="flex items-center justify-center gap-3">
          <label className="text-xl">Github</label>
          <input
            type="text"
            className="px-4 py-2 rounded-md outline-none"
            id="github"
            placeholder="https://github/YOURUSERNAME"
            value={formData.github}
            onChange={(e) => {
              setFormData({ ...formData, github: e.target.value });
            }}
          />
        </div>
        <div className="flex items-center justify-center gap-3">
          <label className="text-xl">LinkedIn</label>
          <input
            type="text"
            className="px-4 py-2 rounded-md outline-none"
            id="LinkedIn"
            placeholder="https://linkedIn/YOURUSERNAME"
            value={formData.linkedin}
            onChange={(e) => {
              setFormData({ ...formData, linkedin: e.target.value });
            }}
          />
        </div>
        <div className="flex items-center justify-center gap-3">
          <label className="text-xl">Skills</label>
          <input
            type="text"
            className="px-4 py-2 rounded-md outline-none"
            id="Skills"
            placeholder="Enter skills and separate each of them with a comma "
            value={formData.skills}
            onChange={(e) => {
              setFormData({ ...formData, skills: e.target.value });
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalDetails;
