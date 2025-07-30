import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Herosection = () => {

 
  return (
    <div  className='flex  justify-between items-center p-3  h-full relative '>
        {/* left */}
        <div  className='hidden md:block w-1/3 h-full rounded-2xl overflow-hidden  '>
             <img data-aos="fade-left" data-aos-duration="2000" className='object-cover rounded-2xl w-full h-full' src="./Krishna.png" alt="" />
        </div>

      {/* middle */}
        <div data-aos="fade-down" data-aos-duration="2000" className='w-full p-2 md:p-0 md:w-1/3 h-full   '>
          

            <img className='w-full h-full object-contain' src="./herologo.png" alt="" />
        </div>


        {/* right */}
        <div className='hidden md:block w-1/3 h-full rounded-2xl overflow-hidden  '>
                <img data-aos="fade-right" data-aos-duration="2000" className='object-cover rounded-2xl w-full h-full' src="./Om.png" alt="" />
        </div>

        {/* <div className='md:hidden absolute h-32 z-30 gap-96 bottom-2 left-0 right-0 md:flex justify-center items-center p-3  text-white'>
            <div className='flex flex-col w-36 font-bold rounded-2xl primary-bg p-3'>
                <h3>Hello!</h3> 
                <h3>I'm Krishna</h3>
                <h4>Founder</h4>
            </div>

              <div className='flex flex-col w-36 font-bold rounded-2xl primary-bg p-3'>
                <h3>Hello!</h3> 
                <h3>I'm Om</h3>
                <h4>Co-Founder</h4>
            </div>
        </div> */}
    </div>
  )
}

export default Herosection
