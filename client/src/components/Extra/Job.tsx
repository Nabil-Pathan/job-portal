import { JobType } from '../../pages/JobsPage'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store';
import { Link, useNavigate } from 'react-router-dom';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as faBookmarkSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/userslice';

const Job =({job} : {job: JobType}) => {
  
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const user = useSelector((state : RootState) => state.user.user);

    const handleApplyJob = async ()=>{
        try {
            if(user === null){
                navigate('/signin')
            }

           else{
             navigate(`/application/${job._id}`)
           }

        } catch (error:any) {
            console.log(error.message);
        }
    }


    const handleSaveJob = async ()=>{
       try {
         if(user === null){
           navigate('/signin')
         }

         else if (user.savedJobs.includes(job._id)){
          const config = {
            headers :{
              Authorization : `Bearer ${user?.token}`
            }
         }

          const { data } = await axios.post(`/api/job/remove-saved-job/${job._id}`,{} ,config)
          console.log(data);
          
          toast.success('Job Removed')
          dispatch(setUser({_id : user._id , name : user.name , email : user.email , pic : user.pic , token : user.token , savedJobs :data.savedJobs}))    
         }

         else {
       
        const config = {
          headers :{
            Authorization : `Bearer ${user?.token}`
          }
       }

       const { data } = await axios.post(`/api/job/save-job/${job._id}`,{},config)
       
       toast.success('Job Saved')
       dispatch(setUser({_id : user._id , name : user.name , email : user.email , pic : user.pic , token : user.token , savedJobs :data.savedJobs}))
         }

       } catch (error : any) {
         console.log(error.message);
       }
    }
  return (
    <div className="border p-4 rounded-lg custom-shadow-1">
      <h2 className="text-2xl font-bold">{job.title}</h2>
      <p className="text-gray-600">{job.company}</p>
      <p className="text-gray-700 mt-4">{job.description}</p>

      <h1 className='text-xl font-medium mt-4'>Skills Requirement</h1>      
      <div className="grid grid-cols-3 gap-2 mt-4">
        {job.requirements.map((skill: string, index: number) => (
          <span
            key={index}
            className="bg-gray-200 text-gray-800  py-1 text-center font-medium rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
      <p className="mt-4">Location: {job.location}</p>
      <p className='font-semibold m mt-4 text-xl'>Salary: ${job.salary}</p>
      <p className="mt-4">Applicants: {job.applicants.length}</p>

      <div className='flex md:flex-row  flex-col   gap-2'>
      <button onClick={handleApplyJob} className='bg-blue-600 text-white px-8 mt-4 py-3 rounded-full'>Apply</button>

      <Link to={`/job/${job._id}`}>
      <button className='bg-gray-300 w-[100%]  px-8 mt-4 py-3 rounded-full'>View Details</button>
      </Link>
     
      </div>

      <div className='flex justify-end mt-6 p-4'>
      <button onClick={handleSaveJob}>
      <FontAwesomeIcon className='h-[30px]' 
      icon={ user?.savedJobs.includes(job._id) ? faBookmarkSolid : faBookmarkRegular} 
      />
      </button>
      </div>
      
    </div>
  )
}

export default Job