import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import { UserType } from "./JobsPage"
import { RootState } from "../redux/store"


const UserProfile = () => {

    const params = useParams()


    const user = useSelector((state : RootState)=> state.user.user)    

    const [userProfile , setUserProfile] = useState<UserType>()

    const fetchUserProfile = async () =>{
        try {
            const config = {
                headers : {
                    Authorization : `Bearer ${user?.token}`
                }
            }

            const { data } = await axios.get(`/api/user/get-user-profile/${params.userId}`,config)

            setUserProfile(data.user)

        } catch (error:any) {
            console.log(error.message);
        }
    }

  useEffect(()=>{
    fetchUserProfile()
  },[])  

  return (
    <div className="container mx-auto">
        <div className="flex items-center py-6 justify-center flex-col">
            <img
                className="md:h-[300px] h-[200px] md:w-[300px] w-[200px] object-cover rounded-full cursor-pointer"
                src={userProfile?.pic}
                alt=""
            />
            <h1 className="mt-6 text-4xl font-semibold">{userProfile?.name}</h1>

            <p>{userProfile?.email}</p>

            <button className="bg-blue-500 text-white font-bold px-4 py-3 rounded-md mt-4">Message</button>
        </div>
    </div>
);

}

export default UserProfile