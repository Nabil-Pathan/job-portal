import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import axios from "axios"
import { RootState } from "../redux/store"
import { UserType } from "./JobsPage"
import { Link } from "react-router-dom"

const AllChats = () => {

    const user = useSelector((state : RootState)=> state.user.user)

    const [users , setUsers] = useState<UserType[]>()


    const fetchUsers = async ()=>{
        try {
            const config = {
                headers : {
                    Authorization : `Bearer ${user?.token}`
                }
            }

            const { data } = await axios.get('/api/chat/get-all-chats',config)

            setUsers(data.allUsers);
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchUsers()
    },[users])

  return (
    <>
    <div className="container bg-white h-screen mx-auto px-4 py-6">
         <h1 className="text-3xl font-bold text-center">Recent Chats</h1>
        <div className="flex mt-8 flex-col">
        {
            users?.map((user : UserType)=>(
                <Link to={`/chat/${user._id}`} className="flex border px-4 py-3 border-gray-300 items-center gap-6 transition duration-300 cursor-pointer " key={user._id}>
                    <img className="h-[40px] w-[40px] rounded-full" src={user.pic} alt="pic" />
                    <h1 className="text-xl font-medium">{user.name}</h1>
                </Link>
            ))
        }
        </div>
    </div>
    </>
  )
}

export default AllChats