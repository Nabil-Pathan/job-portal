import Image1 from "../../images/Image2.png"



const Section2 = () => {
  return (
    <div className='flex mt-10 md:flex-row flex-col md:px-20 px-4 gap-8'>

    <div className="flex-1 md:px-8 px-2 md:py-8 py-4">

        <div className='flex flex-col'>
        <h2 className=' text-xl  p-2'> Why Choose Us</h2>
            <h1 className='md:text-6xl text-4xl font-semibold'>
              
                    Super Simple
                    Applications Are
                    Made For Easily
                </h1>

                <div className=''>
            <p className='mt-4  text-xl '>This is a common goal for many software development teams, as user-friendly design is often considered a key aspect of a successful application.</p>
            </div>
        <button className='border bg-black mt-8 text-white   px-8 py-2 rounded-full duration-500'>Get 14 Days Free Trial</button>


        <div className='bg-white rounded-3xl p-6 mt-10 flex md:flex-row flex-col gap-8'>

          <div className='flex-1'>
            <h3 className='text-xl font-medium'>Free Download App</h3>
            <p className='text-gray-500'>3D printing, also known as additive is a process of creating a physical</p>
          </div>

           <div className='flex-1'>
            <h3 className='text-xl font-medium'>Trusted and Reliable</h3>
            <p className='text-gray-500'>Trusted refers to the perception or belief that a person or organizatio</p>
          </div>
          
        </div>


        </div>

      
    </div>


    <div className="flex-1 flex flex-col gap-6">
             <img className='' src={Image1} alt="" />
         </div>

    </div>
  )
}

export default Section2