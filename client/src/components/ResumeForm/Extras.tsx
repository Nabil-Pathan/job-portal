import { FormDataTypes } from "../../pages/ResumeForm";

const Extras = ({ formData, setFormData }: { formData: FormDataTypes; setFormData: (value: FormDataTypes) => void }) => {
  return (
    <div className=" mt-4 mx-auto p-4">
      <form className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col gap-3">
          <label className="md:text-xl">Languages</label>
          <input
            type="text"
            className="px-4 py-2 rounded-md outline-none"
            id="name"
            value={formData.extra_1}
            onChange={(e) => {
              setFormData({ ...formData, extra_1: e.target.value });
            }}
          />
        </div>

        <div className="flex  flex-col gap-3">
          <label className="md:text-xl">Hobbies</label>
          <input
            type="text"
            className="px-4 py-2 rounded-md outline-none"
            id="name"
            value={formData.extra_2}
            onChange={(e) => {
              setFormData({ ...formData, extra_2: e.target.value });
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Extras;
