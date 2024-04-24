import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { JobType } from "./JobsPage";
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store';
import {  useNavigate } from 'react-router-dom';

const SingleJobPage = () => {
  const params = useParams();
  const [job, setJob] = useState<JobType>();

  const navigate = useNavigate()

  const user = useSelector((state : RootState) => state.user.user);

  const fetchJob = async () => {
    try {
      const { data } = await axios.get(`/api/job/get-job/${params.jobId}`);      
      setJob(data.job);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchJob();
  }, [job]);

  const handleApplyJob = async ()=>{
    try {
        if(user === null){
            navigate('/signin')
        }

       else{
         navigate(`/application/${params.jobId}`)
       }

    } catch (error:any) {
        console.log(error.message);
    }
}

  return (


    <div className="container mx-auto md:py-8 py-4">
      {job ? (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold">{job.title}</h1>
          <p className="text-gray-600 text-2xl mt-3 font-bold">{job.company}</p>
          <p className="text-gray-700 text-xl mt-4">{job.description}</p>
          <div className="mt-4">
            <h2 className="text-lg font-bold">Requirements:</h2>
            <ul className="list-disc list-inside mt-2">
              {job.requirements.map((req, index) => (
                <li key={index} className="text-gray-700">
                  {req}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <p className="text-gray-700 text-xl font-medium mt-4">Location: {job.location}</p>
            <p className="text-gray-700 text-xl font-medium  mt-4">Salary: ${job.salary}</p>
            <p className="text-gray-700 text-xl font-medium  mt-4">Number of Applicants: {job.applicants.length}</p>
          </div>

           <div className="flex mt-8 items-center gap-3">
             <h1 className="text-xl">Posted By : </h1>
             <img className="h-[40px] w-[40px] object-cover rounded-full" src={job.postedBy.pic} alt="" />

             <Link to={`/profile/${job.postedBy._id}`} className="text-xl font-semibold underline">{job.postedBy.name}</Link>
           </div>

           <button onClick={handleApplyJob} className='bg-blue-600 text-white px-8 mt-4 py-3 rounded-full'>Apply</button>

        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleJobPage;
