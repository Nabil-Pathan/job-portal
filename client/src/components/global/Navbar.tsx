import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux'; 
import { RootState } from '../../redux/store';
import  { useDispatch } from "react-redux"
import { clearUser } from "../../redux/userslice"
import toast from 'react-hot-toast';
import LogoImage from "../../images/logo2.png"

const Navbar = ({ open, setOpen }: { open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {

    const navigate = useNavigate()

    const dispatch = useDispatch()   

    const user = useSelector((state : RootState) => state.user.user);


    let Links = [
        { name: "Home", link: "/" },
        { name: "About Us", link: "/" },
        { name: "Service", link: "/" },
        { name: "Jobs", link: "/jobs" },
        { name: "Contact Us", link: "/contact" },
    ];


    let Links2 = [
        { name: "Home", link: "/" },
        { name: "Resume Builder", link: "/resume-builder" },
        { name: "Service", link: "/" },
        { name: "Jobs", link: "/jobs" },
        { name: "Profile", link: "/profile" },
        { name: "My Chats", link: "/all-chats" },
    ];




    const handleLogout = ()=>{
        try {
            dispatch(clearUser());
            navigate('/')
            toast.success("Logout Successful")
        } catch (error :any) {
            console.log(error.message);   
        }
    }


    return (
        <div className={` md:relative md:bg-lightGray bg-white container mx-auto   w-full py-2 bottom-2  top-0 left-0`}>
            <div className='md:flex items-center justify-between  py-4 px-10'>
                {/* logo section */}
                <div className='font-medium text-xl cursor-pointer flex items-center gap-1'>
                    <Link className='flex items-center gap-2 md:pr-10' to="/">
                        {/* <h1 className='text-darkBlue md:text-3xl text-xl font-bold'>Job Portal</h1> */}
                        <img className='w-[100%] md:h-[45px] h-[35px]' src={LogoImage} alt="" />
                    </Link>
                </div>
                {/* Menu icon */}
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-8 cursor-pointer md:hidden w-7 h-7'>
                    {
                        open ? <FontAwesomeIcon className='text-xl' icon={faXmark} /> : <FontAwesomeIcon className='text-xl' icon={faBars} />
                    }
                </div>
                {/* link items */}
                <ul className={`md:flex gap-6 md:items-center  md:bg-lightGray bg-white   md:pb-0 pb-12 absolute md:static  md:z-auto  left-0 w-full md:w-auto md:px-4 pl-9 transition-all duration-500 ease-in ${open ? 'top-16  ' : 'top-[-490px]'}`}>
                    {
                    user === null ? Links.map((link) => (
                        <li onClick={()=> setOpen(!open)} key={link.name} className='flex items-center gap-2 px-2 ' style={{ whiteSpace: 'nowrap' }}>
                            <Link to={link.link} className='text-darkBlue md:p-0 p-4 text-center flex items-center justify-center gap-2 hover:text-blue-400 duration-500'>
                                {link.name}
                            </Link>
                        </li>
                    )) : 

                    Links2.map((link) => (
                        <li onClick={()=> setOpen(!open)} key={link.name} className='flex items-center gap-2 px-2 ' style={{ whiteSpace: 'nowrap' }}>
                            <Link to={link.link} className='text-darkBlue md:p-0 p-4 text-center flex items-center justify-center gap-2 hover:text-blue-400 duration-500'>
                                {link.name}
                            </Link>
                        </li>
                    ))
                    
                    
                    
                    }

                    {
                         user !== null ?  (
                            <div className='px-2'>
                            <button onClick={handleLogout} className='border border-gray-800 md:hidden flex  px-8 py-2 rounded-full duration-500'>Logout</button>
                            </div>
                         ) : (
                            <div className='px-2'>
                             <Link onClick={()=> setOpen(!open)} to='/signin'>   
                            <button className='border border-gray-800 md:hidden flex  px-8 py-2 rounded-full duration-500'>Login</button>
                            </Link>
                            </div>
                         )
                       
                    }
                   

                </ul>
               
                {/* buttons */}


                {
                    user !== null  ? (
                        <div className='md:flex  md:mr-2  hidden items-center'>
                            <button onClick={handleLogout} className='border border-gray-800   px-8 py-2 rounded-full duration-500'>Logout</button>
                    </div>
                    ) : (
                        <div className='md:flex  md:mr-2  hidden items-center'>
                        <Link to="/signin">
                            <button className='border border-gray-800   px-8 py-2 rounded-full duration-500'>Get Started</button>
                        </Link>
                    </div>
                    )
                }

              


                
            </div>
        </div>
    );
};

export default Navbar;