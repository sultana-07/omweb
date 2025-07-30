import React from 'react'
import Heading from './Heading'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'

const OurService = () => {

    const services = [
        {
            id: 1,
            title: " Digital Marketing",
            description: "Powering your brand’s growth through smart,result-driven Digital Marketing",

            imageUrl: "./digital.jpg",
            link : "#digital",
            icon : "4s.png"
        },
         {
            id: 2,
            title: " Graphic Design",
            description: "Crafting impactful Graphic Designs that speak your brand’s story at a glance.",

            imageUrl: "./graphic.jpg",
            link : "#graphic",
            icon : "2s.png"
        },
         {
            id: 3,
            title: " Creative Production",
            description: " Delivering high-quality Creative Production that brings your ideas to life with style and precision.",

 
            imageUrl: "./creative.jpg",
            link : "#creative",
            icon : "3s.png"
        },
         {
            id: 4,
            title: " Web Development",
            description: " Designing and developing fast, responsive websites that elevate your online presence.",

            imageUrl: "./webDev2.jpg",
            link : "#web",
            icon : "1s.png"
        },
        // Add more services as needed
    ];

    const title = "Our Services"
    const subtitle = " At Spark Visuals, we bring brands to life through bold design, dynamic video editing, and captivating motion graphics. From logos to reels, we craft visuals that connect, engage, and leave a lasting impact. Let’s turn your vision into visual magic."


 
  return (
    <div className='w-full h-fit  p-2 text-center'>
        <Heading title={title} subtitle={subtitle} />

        <div className='w-full h-fit mt-4  md:p-2 p-10 flex flex-wrap justify-center items-center gap-16'>
           
            {services.map(service => (
                <div 
                data-aos="zoom-out"
                key={service.id} className='md:w-60 w-full h-80  rounded-3xl  shadow-md overflow-hidden relative transition-transform duration-300 transform hover:scale-105 '>
                     <div className='hidden w-10 h-10 md:top-40 md:left-24 top-40 left-44 absolute z-40 rounded-full  md:flex justify-center items-center primary-bg object-cover'>
                         
                          <img className='w-full h-full scale-150 object-cover' src={service.icon} alt="" />
                     </div>
                    <div className='w-full h-[60%] '>
                        <img className='w-full  h-full object-cover' src={service.imageUrl} alt={service.title} />
                    </div>

                <div className='w-full h-full  p-1 primary-bg text-white'>
                    <h2 className='text-xl font-bold mt-1'>{service.title}</h2>
                    <p className=' mt-1 text-xs'>{service.description}</p>
                    <a href={service.link} className='text-sm font-bold hover:underline mt-3 inline-block'>Learn More</a>
                </div>
            </div>
            ))}

        </div>
    </div>
  )
}

export default OurService
