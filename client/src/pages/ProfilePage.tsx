import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useRef, FormEvent, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userslice"
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage"
import { app } from '../firebase';
import DropDown from "../components/Extra/DropDown";

const ProfilePage = ({ open }: { open: boolean}) => {


  const user = useSelector((state: RootState) => state.user.user)


  const fileRef = useRef<HTMLInputElement>(null)

  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    password: "",
    pic: ""
  });


  const [file, setFile] = useState<File | null>(null);

  const [fileUploading, setFileUploading] = useState(false)
  const [filePer, setFilePer] = useState(Number)
  const [fileError, setFileError] = useState(Error)




  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    // Update User Profile
    try {
      e.preventDefault()
      const config = {
        headers: {
          Authorization: `Bearer ${user?.token}`
        }
      }

      const { data } = await axios.post(`/api/user/update-profile/${user?._id}`, formData, config)

      const { _id, name, email, pic, savedJobs } = data.user
      dispatch(setUser({ _id, name, email, pic, token: data.token, savedJobs }))
      toast.success("Profile Updated")
    } catch (error: any) {
      console.log(error.message);
    }
  }



  const handleFileUpload = (file: File) => {
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
          setFormData({ ...formData, pic: downloadUrl })
          setFileUploading(false)
        })
      }
    )
  }


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    <>    
    <div className="container mx-auto p-4">

      <div className="flex justify-end px-4 gap-4 ">
        

        <DropDown open={open}/>
      </div>

      <form  onSubmit={handleSubmit}>
        <div className="flex md:flex-row flex-col ">

          {/* Profile Pic */}
          <div className="flex-1 flex justify-center  p-4">
            <img
              onClick={() => fileRef.current && fileRef.current.click()}
              className="md:h-[400px] cursor-pointer"
              src={user?.pic || formData.pic} alt="" />

{
  fileError && <p className="text-red-500 mt-4"></p> 
}



{
  fileUploading && <p></p>
}
            <input
              onChange={handleFileChange}
              type="file"
              ref={fileRef}
              hidden accept='image/*' />
          </div>


          {/* User Information  */}

          <div className="flex-1 md:p-6">
            <div>
              <label htmlFor="name" className="block  font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full border border-gray-300 px-4 py-3 outline-none rounded-md shadow-sm"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={handleChange}
              />

            </div>


            <div className="mt-4">
              <label htmlFor="name" className="block  font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border border-gray-300 px-4 py-3 outline-none rounded-md shadow-sm "
                placeholder="Your Full Name"
                value={formData.email}
                onChange={handleChange}
              />

            </div>


            <div className="mt-4">
              <label htmlFor="name" className="block  font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full border border-gray-300 px-4 py-3 outline-none rounded-md shadow-sm "
                placeholder="Change Password"
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className=" mt-6 bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600"
            >
              Update
            </button>



          </div>



        </div>

        {
  filePer && <p className="text-center"></p> 
}
      </form>

      


    </div>

    </>

  );
};

export default ProfilePage;
