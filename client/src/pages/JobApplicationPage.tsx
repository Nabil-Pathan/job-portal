import { useSelector } from 'react-redux'
import { RootState } from '../redux/store';
import {  useNavigate } from 'react-router-dom';
import axios from "axios";
import React, { FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { app } from '../firebase';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage"
import toast from 'react-hot-toast';


const JobApplicationPage = () => {

  const navigate = useNavigate()

  const user = useSelector((state : RootState) => state.user.user);


  const params = useParams()

  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const [experience , setExperience ] = useState("")
  const [resume , setResume] = useState("")
  const [file , setFile ] = useState<File | null>(null);
  const [coverLetter , setCoverLetter] = useState("")
  const [role , setRole] = useState("")
  const [ fileUploading, setFileUploading] = useState(false)
  const [ filePer, setFilePer] = useState(Number)
  const [ fileError, setFileError] = useState(Error)



  const fetchJob = async () => {
    try {
      const { data } = await axios.get(`/api/job/get-job/${params.jobId}`);            
      setRole(data.job.title)
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(()=>{
     fetchJob()
  },[])


  const ApplyJob = async (e : FormEvent)=>{
    try {
       e.preventDefault()
       
       const config = {
         headers :{
           Authorization : `Bearer ${user?.token}`
         }
       }
       const { data } = await axios.post(`/api/job/apply/${params.jobId}`, { name , email , experience , resume , role , coverLetter} ,config)

       console.log(data);
       
       
       toast.success("Applied Successfully")
       
       navigate('/jobs')

    } catch (error:any) {
       console.log(error.message);
       
    }
  }


  const handleFileUpload = (file : File) => {
    setFileUploading(true)
    const storage = getStorage(app)
    const fileName = new Date().getTime() + file.name
    const storageRef = ref(storage, fileName)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on('state_changed', (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      console.log(progress);
      setFilePer(Math.round(progress))
    }, (error) => {
      setFileError(error)
      setFileUploading(false)
      console.log(error);
    },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          setResume(downloadUrl)
          setFileUploading(false)
        })
      }
    )
  }


  const handleFileChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
    }
  }


  useEffect(() => {
    if (file) {
      handleFileUpload(file)
    }
  }, [file])


  return (
    <div className=' flex items-center justify-center md:p-5 p-2'>
      <div className="bg-white md:w-[60%]  rounded-lg shadow-lg p-8  w-full">
        <h1 className="text-3xl font-bold text-center mb-6">Apply for Job</h1>
        <form className="space-y-4" onSubmit={ApplyJob}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full border border-gray-300 px-4 py-3 outline-none rounded-md shadow-sm sm:text-sm"
              placeholder="Your Full Name"
              required
              onChange={(e)=> setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full border border-gray-300 px-4 py-3 outline-none rounded-md shadow-sm sm:text-sm"
              placeholder="Your Email Address"
              required
              onChange={(e)=> setEmail(e.target.value)}

            />
          </div>


          <div className="flex gap-4 w-full">

            <div className="w-full">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Role
            </label>
          <input
              type="text"
              id="role"
              name="role"
              className="mt-1 block w-full border border-gray-300 px-4 py-3 outline-none rounded-md shadow-sm sm:text-sm"
              value={role}
              required

            />   

           </div>

           <div className="w-full">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Experience
            </label>
          <input
              type="number"
              id="experience"
              name="experience"
              className="mt-1 block w-full border border-gray-300 px-4 py-3 outline-none rounded-md shadow-sm sm:text-sm"
              required
              onChange={(e)=> setExperience(e.target.value)}

            />   

           </div>


          </div>


          <div>
            <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
              Upload Resume (PDF)
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              onChange={handleFileChange}
            
            />

{
  fileError  && <p className="text-red-500 mt-4"></p>
}

{
  filePer && <p></p>
}

{
  fileUploading && <p></p>
}
          </div>
          <div>
            <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">
              Cover Letter
            </label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              rows={4}
              className="mt-1 block w-full border border-gray-300 px-4 py-3 outline-none rounded-md shadow-sm sm:text-sm"
              placeholder="Your Cover Letter (optional)"
              onChange={(e)=> setCoverLetter(e.target.value)}
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>

      </div>
  );
};

export default JobApplicationPage;
