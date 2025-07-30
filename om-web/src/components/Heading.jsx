import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Heading = ({ title, subtitle }) => {
  return (
    <div className='w-full h-fit  md:px-36 px-2 py-6 text-center'>
      <h1 data-aos="zoom-out-down" className='text-4xl font-bold text-primary '>{title}</h1>
        <p data-aos="fade-right" data-aos-duration="2000" className='text-gray-600 mt-2  text-primary font-medium'>{subtitle}</p>
    </div>
  )
}

export default Heading
