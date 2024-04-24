import axios from "axios"
import { RootState } from "../redux/store"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { JobType } from "./JobsPage"
import MyJob from "../components/Extra/MyJob"
import Loader from "../components/Extra/Loader"



const MyJobs = () => {

    const [jobs, setJobs] = useState<JobType[]>()

    const [loading , setLoading ] = useState(false)

    const user = useSelector((state: RootState) => state.user.user)

    const fetchJobs = async () => {
        try {
            setLoading(true)
            const config = {
                headers: {
                    Authorization: `Bearer ${user?.token}`
                }
            }

            const { data } = await axios.get(`/api/user/get-created-jobs/${user?._id}`, config)

            setJobs(data.jobs)
            setLoading(false)

        } catch (error: any) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        fetchJobs()
    }, [])

    return (
        <>

{
    loading && <Loader/>
}


        {
            jobs && jobs?.length < 1 ? (
                <div className="h-screen flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-semibold">No Jobs Found</h1>
                </div>
            ) : (
                <div className="container mx-auto md:px-6 px-2 md:py-8 py-4">
                <h1 className="md:text-4xl text-3xl font-semibold text-center">Your Jobs</h1>
                <div className="grid grid-cols-1 mt-8 md:p-4 p-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        jobs?.map((job: JobType) => (
                            <MyJob  key={job._id} job={job} />
                        ))
                    }
                </div>
            </div>
            )  
        }
       
        </>
    )
}

export default MyJobs