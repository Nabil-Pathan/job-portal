import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faClock, faEnvelope, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LogoImage from "../../images/logo2.png"

const Footer = () => {
  return (
    <div className='bg-white   md:p-10 p-2 container mx-auto'>

      <div className='flex md:flex-row flex-col justify-center  md:p-8 md:gap-20 gap-10'>

        {/* News Letter */}
        <div className='bg-lightGray p-4 rounded-md flex-1'>
          <h3 className='px-4'>Subscribe</h3>

          <div className='flex mt-6 relative '>
            <input type="text" className='rounded-lg focus:outline-none px-4 py-2 w-full' placeholder='Email Address' />
            <button className='absolute right-1 top-0 bottom-0 bg-gray-800  text-white font-bold rounded-2xl px-4 py-2 '>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>

          <p className='text-gray-500 mt-6'>
            Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.
          </p>
        </div>


        {/* Company Details */}
        <div className='p-4 flex-1'>
          <h3 className=''>Company</h3>

          <p className='text-gray-500 mt-4'>
            At TechPros Solutions, we are about technology and dedicated to providing IT solutions for businesses of all sizes.
          </p>

          <div className='flex gap-2 mt-6'>
            <span className='bg-gray-300 px-4 py-1 text-gray-600 text-xl rounded-full'>
              <FontAwesomeIcon icon={faLocationDot} />
            </span>

            <p className='text-gray-500 text-sm '>1791 Yorkshire Circle Kitty Hawk, NC 279499</p>
          </div>
        </div>

        {/* Products */}
        <div className='p-4'>
          <h3 className='md:text-start text-center'>Product</h3>

          <div className='flex flex-col gap-4 md:items-start items-center text-gray-500 mt-4  '>
            <p className='text-[18px]'>Service</p>
            <p className='text-[18px]'>Portfolio</p>
            <p className='text-[18px]'>Contact Us</p>
            <p className='text-[18px]'>About Us</p>
            <p className='text-[18px]'>Blog Us</p>
          </div>

        </div>


        {/* Contacts */}
        <div className='p-4'>
          <h3 className='md:text-start text-center'>Contact Us</h3>

          <div className='flex flex-col md:items-start items-center gap-4 text-gray-500 mt-4'>

            <div className='flex items-center gap-3 text-gray-500'>
              <FontAwesomeIcon icon={faClock} />

              <p className=''>Mon-Sat 9:00 - 7:00</p>
            </div>


            <div className='flex items-center gap-3 text-gray-500'>
              <FontAwesomeIcon icon={faPhoneVolume} />

              <p className=''>+91 987-987-9876</p>
            </div>

            <div className='flex items-center gap-3 text-gray-500'>
              <FontAwesomeIcon icon={faEnvelope} />

              <p className=''>123@gmail.com</p>
            </div>


          </div>
        </div>

      </div>

      <div className='md:p-10'>
      <hr className='bg-gray-200 h-[3px] mt-4 '/>
      </div>


      <div className='flex md:mt-0 mt-10 md:flex-row flex-col items-center md:gap-0 gap-8 md:px-10 justify-between'>
         <div>
           {/* <h1 className='font-semibold text-2xl'>Logo</h1> */}
           <img className='w-[100%] md:h-[60px] h-[40px]' src={LogoImage} alt="" />
         </div>


         <div className='flex gap-6'>
           <p>Terms</p>
           <p>Privacy</p>
           <p>Cookies</p>
         </div>


         <div className='flex gap-4'>
            <div className='bg-white border border-gray-400 rounded-full px-3  py-2'>
              <FontAwesomeIcon className='text-xl' icon={faLinkedin}/>
            </div>


            <div className='bg-white border border-gray-400 rounded-full px-3  py-2 '>
              <FontAwesomeIcon className='text-xl' icon={faFacebook}/>
            </div>

            <div className='bg-white border border-gray-400 rounded-full px-3  py-2'>
              <FontAwesomeIcon className='text-xl' icon={faTwitter}/>
            </div>

         </div>
      </div>

    </div>
  )
}

export default Footer;