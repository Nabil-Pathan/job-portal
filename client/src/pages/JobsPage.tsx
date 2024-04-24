import { useEffect, useState } from "react"
import axios from "axios"
import Job from "../components/Extra/Job";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux';
import { RootState } from "../redux/store";
import Loader from "../components/Extra/Loader";


export interface UserType {
  _id: string
  name: string
  email: string
  password: string
  pic: string
}


export interface JobType {
  _id: string;
  title: string;
  description: string;
  requirements: string[];
  location: string;
  salary: number;
  datePosted: Date;
  company: string,
  postedBy: UserType;
  applicants: [];
}


const JobsPage = ({ open }: { open: boolean }) => {

  const user = useSelector((state: RootState) => state.user.user);


  const [jobs, setJobs] = useState<JobType[]>()


  const [searchQuery, setSearchQuery] = useState("")

  const [loading , setLoading] = useState(false)


  const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const query = e.target.value

      setSearchQuery(query)



      const config = {
        headers: {
          Authorization: `Bearer ${user?.token}`
        }
      }

      const { data } = await axios.get(`/api/job/search-job?searchQuery=${searchQuery}`, config)

      setJobs(data.jobs)


    } catch (error) {
      console.log(error);
    }
  }

  const fetchJobs = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get('/api/job/getall-jobs')

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
      loading ? (<Loader/>) : (
        <div className="container mx-auto flex flex-col items-center md:px-4 px-2 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Job Listings</h1>
  
        <div className={`relative md:w-[70%] w-[100%] ${open ? 'z-[-1]' : 'z-0'}   mt-4 text-center`}>
          {/* Search bar with search icon */}
          <input
            type="text"
            placeholder="Search Jobs..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="text-black shadow-xl outline-none border-2 border-gray p-2 w-full pl-10 rounded-full"
          />
          <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-3 text-gray-500 h-5 w-5" />
        </div>
  
  
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

export default JobsPage