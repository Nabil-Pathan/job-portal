import HomeCarousel from './HomeCarousel'

const Section4 = () => {
  return (
    <div className='mt-10 bg-gray-300 rounded-3xl md:py-8 py-2 md:px-20 px-4'>
       <div className='mt-4'>
        <h3 className='text-center text-xl'>Testimonials</h3>
         <h1 className='text-center md:text-5xl text-3xl mt-2 font-semibold'>Here is what our Clients <br /> are saying About us</h1>
       </div>
        <div className='mt-8'>
        <HomeCarousel/>
        </div>
    </div>
  )
}

export default Section4