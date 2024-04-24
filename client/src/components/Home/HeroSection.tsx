import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import HeroImage from "../../images/HeroImage.png"
import { Link } from 'react-router-dom'


const HeroSection = () => {
    return (
        <div className='flex md:flex-row flex-col gap-8 md:p-10 p-4'>


            <div className='flex-1'>
            <div className=' flex  items-center rounded-3xl justify-center  '>
               <img src={HeroImage} alt="HeroImage" />
            </div>
            </div>

           

            <div className='flex justify-center flex-1 flex-col'>
                <h2 className=' text-xl p-2'> <FontAwesomeIcon icon={faArrowLeft}/> Best Services</h2>
            <h1 className='md:text-6xl text-4xl font-semibold'>
                  Find the best Job suits you in just few steps
                </h1>

                <div>
                <p className='mt-8 text-xl '>Lorem ipsum is placeholder text commonly used in the  <br /> graphic,  previewing layouts and visual.</p>
                <Link to='/jobs'>
                <button className='border mt-8 border-gray-800   px-8 py-4  rounded-full duration-500'>Find Job</button>
                </Link>
                </div>
            </div>

        </div>
    )
}

export default HeroSection