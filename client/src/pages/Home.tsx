import HeroSection from '../components/Home/HeroSection'
import Section2 from '../components/Home/Section2'
import Section3 from '../components/Home/Section3'
import Section4 from '../components/Home/Section4'

const Home = () => {
  return (
    <div className='container mx-auto'>

      <div className=''>
       <HeroSection/>
       </div>

       <div className='mt-10'>
       <Section2/>
       </div>


       <div className='container mx-auto mt-10'>
         <Section3/>
       </div>


       <div className='container mx-auto mt-10'>
         <Section4/>
       </div>

    </div>
  )
}

export default Home