import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"
import { app } from '../../firebase'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { toast  } from 'react-hot-toast'
import { useNavigate } from "react-router-dom"
import { setUser } from "../../redux/userslice"


const OAuth = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleClick = async ()=> {
     try {
         const Provider = new GoogleAuthProvider()

         const auth = getAuth(app)

         const result = await signInWithPopup(auth,Provider)


         console.log(result);
         

         const { data } = await axios.post('/api/auth/google', result.user )



         const { _id , name , email , savedJobs ,pic } = data.user

         dispatch(setUser({_id , name , email , token :data.token , savedJobs , pic  }))
         
         toast.success('Login Success')

         navigate('/')
         
     } catch (error : any) {
       console.log(error.message);
     }
  }
  return (
   <>
   
     <button type="button" onClick={handleClick} className="bg-red-600 text-white font-semibold px-10 py-4 rounded-md"> Continue With Google  </button>
   </>
  )
}

export default OAuth