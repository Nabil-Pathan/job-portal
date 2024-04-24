import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { JobType } from "./JobsPage"
import Job from "../components/Extra/Job"
import { useEffect, useState } from "react"
import axios from "axios"

const SavedJobs = () => {

    const user = useSelector((state: RootState) => state.user.user)

    
  const [jobs , setJobs] = useState<JobType[]>()

    const fetchJobs = async ()=>{
        try {
            const config = {
                headers :{
                 Authorization : `Bearer ${user?.token}`
                }
              }
       
             const { data } =await axios.get('/api/job/get-saved-jobs', config)

             console.log(data);
             
             setJobs(data.savedJobs)
        } catch (error:any) {
            console.log(error.message);
            
        }
    }

    useEffect(()=>{
        fetchJobs()
    },[])

  return (

    <>
    {

    
     jobs && jobs?.length < 1 ? (
                <div className="h-screen flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-semibold">No Jobs Found</h1>
                </div>
            ) : (
              <div className="container mx-auto md:p-4">
       <h1 className="text-3xl font-semibold text-center mt-4">Saved Jobs</h1>
         <div className="grid grid-cols-1 mt-8 md:p-4 p-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {jobs &&
        jobs.map((job: JobType) => (
          <Job key={job.title} job={job} />
        ))}
    </div>
    </div>
            )

          }
    </>
    
  )
}

export default SavedJobs