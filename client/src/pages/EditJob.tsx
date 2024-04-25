import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

const EditJob = () => {


  const params = useParams()

  const user =  useSelector((state : RootState)=> state.user.user)

  const navigate = useNavigate()
  
  const [requirements, setRequirements] = useState<string[]>([]);

  const [requirementInput, setRequirementInput] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState(Number);


  const handleAddRequirement = () => {
    if (requirementInput.trim() !== "") {
      setRequirements([...requirements, requirementInput]);
      setRequirementInput("");
    }
  };

  const handleSubmit = async (e : FormEvent) => {
     try {
        e.preventDefault()

        const config = {
           headers :{
             Authorization : `Bearer ${user?.token}`
           }
        }

        const { data } = await axios.put(`/api/job/update-job/${params.jobId}`,{ title , description , company , salary , location , requirements},config)


        console.log(data);
        
        toast.success("Job Updated")
        
        navigate('/jobs')
        
     } catch (error:any) {
       console.log(error.message);
     }
  };

  const fetchJob =  async ()=>{
    try {
    
      const { data } = await axios.get(`/api/job/get-job/${params.jobId}`)
      
      setTitle(data.job.title)
      setDescription(data.job.description)
      setRequirements(data.job.requirements)
      setLocation(data.job.location)
      setCompany(data.job.company)
      setSalary(data.job.salary)

   } catch (error:any) {
     console.log(error.message);
   }
  }


  useEffect(()=>{
    fetchJob()
  },[])

  const handleRemoveSkill = (requirement : string)=>{
      setRequirements(requirements.filter((req)=> req !== requirement))   
  }
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl text-center
       font-bold mb-8">Edit Job</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <label className="block mb-4">
          Job Title:
          <input
            type="text"
            className="form-input px-4 py-3 rounded-md outline-none mt-1 block w-full"
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
          />
        </label>
        <label className="block mb-4">
          Job Description:
          <textarea
            className="form-textarea mt-1 block w-full  rounded-md outline-none p-3"
            rows={5}
            value={description}
            onChange={(e)=> setDescription(e.target.value)}
          />
        </label>

        <label className="block ">
          Requiremsnts:

          <div className="flex items-center justify-center gap-2">
          <input
            type="text"
            className="form-input px-4 py-3 rounded-md outline-none  block w-full"
            value={requirementInput}
            onChange={(e) => setRequirementInput(e.target.value)}
          />
          <button
          type="button"
          onClick={handleAddRequirement}
          className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-3 px-8 rounded focus:outline-none focus:shadow-outline "
        >
          Add
        </button>
        </div>

        <div className="mt-8 grid md:grid-cols-4 grid-cols-2 gap-2">
          {
            requirements.map((requirement)=>(
              <span  className="bg-pink-200 flex justify-between items-center gap-4  py-3 px-4 rounded-full text-center font-medium ">{requirement}
              
               <button
               type="button"
               onClick={() => handleRemoveSkill(requirement)} className=""><FontAwesomeIcon icon={faXmark}/></button>
              </span>
            ))
          }

</div>
        </label>
        <label className={`block ${requirements.length > 0 ? 'mt-10' : 'mt-0'}`}>
          Salary:
          <input
            type="number"
            className="form-input mt-1 block px-4 py-3 rounded-md outline-none w-full"
            value={salary}
            onChange={(e)=> setSalary(parseInt(e.target.value))}
          />
        </label>
        <label className="block mb-4">
          Company:
          <input
            type="text"
            className="form-input mt-1 block w-full px-4 py-3 rounded-md outline-none"
            value={company}
            onChange={(e)=> setCompany(e.target.value)}
          />
        </label>

        <label className="block mb-4">
          Location:
          <input
            type="text"
            className="form-input mt-1 block w-full px-4 py-3 rounded-md outline-none"
            value={location}
            onChange={(e)=> setLocation(e.target.value)}
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-3 px-8 rounded focus:outline-none focus:shadow-outline mt-4"
        >
          Update
        </button>
      </form>
    </div>
  )
}

export default EditJob