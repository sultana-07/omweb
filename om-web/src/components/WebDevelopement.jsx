import React from 'react'
import Heading from './Heading'
import Aos from 'aos'
import 'aos/dist/aos.css'

const DigitalMark = () => {

    const title = " Web Development"
    const subtitle = "  Web Development turns your ideas into fast, responsive, and user-friendly websites. It combines clean design with smart functionality to create seamless digital experiences. From landing pages to full-scale websites, every project is  built to  perform and impress. Your online presence starts with a powerful, well-crafted website."



    const items = [
        {
            id : 1,
            title : "  Website Design & Development",
            discription : " Website Design & Development brings your brand to life with visually stunning and high -performing websites. It blends creative design with clean, responsive coding for a seamless user experience. From layout to functionality, every element is crafted to engage and convert visitors. A well-designed website builds trust, boosts visibility, and drives business growth. Whether it's a portfolio, business site, or e-commerce platform — it starts with smart design and solid development.",
            image : "./webDev.jpg",
            status : "right"
                  
        },

          
       
    ]
 
 
  return (
    <div id='web' className='w-full h-fit p-2 mt-40 '>
      <Heading title={title} subtitle={subtitle}/>

      <div className='w-full h-fit p-2 space-y-4  md:flex md:flex-col text-primary justify-center align-middle'>
        {items.map((item) => (
               <div 
               data-aos="fade-right"
               key={item.id} className={`'w-full     md:h-60 md:mt-6 mt-12  flex flex-col-reverse md:flex-row ${item.status == "right" ? '' : 'md:flex-row-reverse md:text-right'}   justify-center align-middle'`}>
            {/* left */}
              <div className={  `md:w-1/2 h-full  ${item.status == "right" ? 'md:pr-9' : 'md:pl-9'} `}>
                   <h3 className='text-2xl font-bold'>{item.title}</h3>
                   <p className='mt-2 font-medium '>{item.discription}</p>
              </div>

              {/* right  */}

              <div className='w-1/3 h-full object-cover rounded-2xl  md:rounded-none overflow-hidden'>
                   <img className='w-full h-full object-cover' src={item.image} alt="" />
              </div>
         </div>
        ))}
      </div>
    </div>
  )
}

export default DigitalMark
