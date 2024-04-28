import { Link } from "react-router-dom"
import OAuth from "../components/Auth/OAuth"
import { FormEvent, useState } from "react"
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/userslice"
import { useDispatch } from "react-redux";


interface FormDataType {
    email: string;
    password: string;
}

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [formData, setFormData] = useState<FormDataType>({
        email: "",
        password: ""
    })

    const handleSubmit = async (e: FormEvent) => {
        try {
            e.preventDefault()

            console.log(formData);

            const { data } = await axios.post("/api/auth/signin", formData)

            const { _id, name, email, pic , savedJobs} = data.user

            dispatch(setUser({ _id, name, email, pic, token: data.token , savedJobs }))
            toast.success("Login Successful")
            navigate('/')
        } catch (error: any) {
            console.log(error);
        }
    }




    return (
        <div className='p-3 max-w-lg container mx-auto'>
            <h1 className='text-3xl text-center font-semibold my-7'>Login</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <input
                    type='email'
                    placeholder='email'
                    className='border outline-none p-3 rounded-lg'
                    id='email'
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />


                <input
                    type={'password'}
                    placeholder="password"
                    className="border w-full outline-none p-3 rounded-lg pr-10"
                    id="password"
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />



                <button
                    className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
                >
                    {/* {loading ? 'Loading...' : 'Sign Up'} */} Login
                </button>
                <OAuth />
            </form>
            <div className='flex gap-2 mt-5'>
                <p>Already Have an account?</p>
                <Link to={'/signup'}>
                    <span className='text-blue-700'>Sign up</span>
                </Link>
            </div>
        </div>
    )
}

export default Login
