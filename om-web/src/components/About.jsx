import React,{useEffect, useState} from 'react'
import {NavLink,useLocation } from 'react-router-dom';
import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  const [show,setShow] = useState(false);
  const location = useLocation();
   
  useEffect(() => {
 
    if(location.pathname == "/about"){
      setShow(true);
      console.log(location.pathname);
      
    }else{
      setShow(false)
      console.log(location.pathname)
    }
  },[])
  
  return (
    <>
    {/* About Section */}

   <NavLink to={'/about'} >
     <div  id='about' className='w-full h-full  md:px-28 md:py-10 p-4  text-gray-800 flex flex-col items-center text-center'>
      <h2 data-aos="flip-left" className='text-4xl font-bold mb-2  text-primary '>About Us</h2>
      <p data-aos="zoom-out" className='text-xl p-2'> Driven by ideas, Powered by design – This is the art of
 SPARK VISUAL</p>

      <h2  data-aos="flip-left" className='text-3xl font-bold mb-2 text-primary '>Our Mission</h2>
      <p  data-aos="zoom-out" className='p-2' >  At Spark Visuals, our mission is to ignite creativity and deliver impactful digital experiences.
 We blend design, storytelling, and technology to help brands stand out and connect with their audience.
 From visual design to video production and digital marketing, we craft solutions that inspire action.
 Our goal is to turn ideas into powerful visuals that drive real results.
 We don’t just create content — We Spark Growth, Trust, and Lasting Impressions.

</p>
    </div>
   </NavLink>

   {show ? (

      
      <div className='w-full px-2 '>
           <div className='w-full text-center text-3xl font-bold text-primary'>
               Visiting Card
           </div>

           <div className='w-full flex justify-center align-middle gap-13 p-8 '>
             <img className='w-1/2 md:w-[20%] rounded-2xl h-auto' src="./visiting2.jpeg" alt="" />
              <img className='w-1/2 md:w-[20%] rounded-2xl h-auto' src="./visitng.png" alt="" />
           </div>
      </div>
   ): ''}
    </>
  )
}

export default About
