import { Link } from 'react-router-dom'
import { JobType } from '../../pages/JobsPage'
import { useState } from 'react'
import DeleteJobModal from './DeleteJobModal'

const MyJob = ({job } : {job : JobType}) => {

  const [deleteModal , setDeleteModal] = useState(false)
  return (
    <>
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
     <Link className='w-[100%]' to={`/edit-job/${job._id}`}>
      <button  className='bg-blue-600 w-[100%] text-white px-8 mt-4 py-3 rounded-full'>Edit</button>
      </Link>

      <button  onClick={()=> setDeleteModal(true)} className='bg-red-600 text-white font-bold w-[100%]  px-8 mt-4 py-3 rounded-full'>Delete</button>     
      </div>


      <Link to={`/applications/${job._id}`}>
      <button className='bg-teal-400 text-white w-full mt-6 font-bold px-3 py-4 rounded-full'>View applications</button>
      </Link>
      
    </div>
    {
        deleteModal && <DeleteJobModal jobId={job._id} setDeleteModal={setDeleteModal}   />
      }
    </>
  )
}

export default MyJob