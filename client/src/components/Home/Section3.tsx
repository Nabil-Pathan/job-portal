import Image1 from "../../images/news-letter4.png"
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Section3 = () => {
    return (
        <div className='flex mt-10 p-4 rounded-3xl md:flex-row flex-col gap-2'>



            <div className="flex-1 md:px-8 px-2 md:py-8 py-4">

                <div className='flex md:p-10 flex-col'>
                    <h2 className=' text-xl  p-2'> Newsletters</h2>
                    <h1 className='md:text-6xl text-4xl font-semibold'>

                        Get Every <br /> Single Update
                    </h1>

                    <div className=''>
                        <p className='mt-4  text-xl '>We are available on store download our Apps</p>
                    </div>

                    <div className='flex mt-6 relative '>
                        <input type="text" className='rounded-full bg-gray-700 text-white font-medium focus:outline-none p-4 w-full' placeholder='Email Address' />
                        <button className='absolute right-0 top-0 bottom-0 bg-gray-300 font-bold rounded-full px-6 py-2 '>
                            <FontAwesomeIcon className='text-xl font-semibold' icon={faAngleRight} />
                        </button>
                    </div>

                    

                </div>




            </div>



            <div className="flex-1 flex items-center justify-center  md:px-8 px-2 md:py-8 py-4 ">
                <img className='' src={Image1} alt="" />
            </div>

        </div>
    )
}

export default Section3