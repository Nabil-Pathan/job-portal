import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApplicationComponent from "../components/Extra/ApplicationComponent";


export interface ApplicationType {
  name : string ,
  email : string,
  jobId: string;
  role: string;
  experience: number;
  resume: string; 
  coverLetter?: string;
}


const AllJobApplications = () => {

  const user = useSelector((state : RootState)=> state.user.user)

  const [applications , setApplications] = useState<ApplicationType[]>()

  const params = useParams()

  const fetchApplications = async ()=>{
    try {
       const config = {
         headers :{
           Authorization : `Bearer ${user?.token}`
         }
       }

       const {data } = await axios.get(`/api/job/get-job-applications/${params.jobId}`,config)
  
       setApplications(data.applications)

       
    } catch (error:any) {
       console.log(error.message);
       
    }
  }

  useEffect(()=>{
    fetchApplications()
  },[])

  return (
    <>
    {
      applications && applications?.length < 1  ? (
        <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold">No Applications Yet</h1>
        </div>
      ) : (
        <div className="overflow-x-auto">
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Name</th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Email</th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Role</th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Experience</th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Resume</th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Cover Letter</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
       {
        applications?.map((application : ApplicationType)=>(
           <ApplicationComponent application={application}/>
        ))
       }
      </tbody>
    </table>
  </div>
      ) 
    }

    </>
  )
}

export default AllJobApplications