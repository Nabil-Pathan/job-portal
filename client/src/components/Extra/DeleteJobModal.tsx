import './DeleteJobModal.css';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const DeleteJobModal = ({ setDeleteModal, jobId }: { setDeleteModal: (value: boolean) => void; jobId: string; }) => {

  const user = useSelector((state: RootState) => state.user.user);
  const navigate = useNavigate();

  const handleDeletePost = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user?.token}`
        }
      };
      setDeleteModal(false);
      const { data } = await axios.delete(`/api/job/delete-job/${jobId}`, config);
      toast.success('Job Deleted');
      console.log(data);
      navigate('/created-jobs')
      console.log('Job deleted');
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="modal-wrapper text-black">
        <div className="modal-container flex flex-col gap-2 items-center justify-center">
          <button className="absolute text-3xl top-3 right-3 px-2 py-1 rounded-md text-gray-700 bg-gray-300 hover:bg-gray-200 hover:text-gray-600" onClick={() => setDeleteModal(false)}>X</button>
          <FontAwesomeIcon className='h-[60px] w-[60px]' icon={faTrash} />

          <div className='mt-6'>
          <h2 className="text-2xl text-center font-bold">Are You Sure You Want to Delete the Job ?</h2>
          <button className="mt-4 bg-red-700 w-full rounded-md hover:bg-red-500 font-bold text-white p-3" onClick={handleDeletePost}>Delete</button>
          <button className="mt-4 bg-gray-300 w-full hover:bg-gray-500 font-bold p-3 rounded-md shadow-lg" onClick={() => setDeleteModal(false)}>Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteJobModal;
