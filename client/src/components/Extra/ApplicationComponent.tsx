import { ApplicationType } from '../../pages/AllJobApplications'

const ApplicationComponent = ({application} : {application : ApplicationType}) => {

 
  return (
    <>
     <tr>
          <td className="px-6 py-4 whitespace-no-wrap">{application.name}</td>
          <td className="px-6 py-4 whitespace-no-wrap">{application.email}</td>
          <td className="px-6 py-4 whitespace-no-wrap">{application.role}</td>
          <td className="px-6 py-4 whitespace-no-wrap">{application.experience}</td>
          <td className="px-6 py-4 whitespace-no-wrap">
        <a target='_blank' href={application.resume} className="text-blue-500 hover:underline">View Resume</a>
      </td>
          <td className="px-6 py-4 whitespace-no-wrap">{application.coverLetter}</td>
        </tr>
    </>
  )
}

export default ApplicationComponent