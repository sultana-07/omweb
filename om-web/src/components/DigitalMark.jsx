import React from 'react'
import Heading from './Heading'
import Aos from 'aos'
import 'aos/dist/aos.css'

const DigitalMark = () => {

    const title = "Digital Marketing"
    const subtitle = " At Spark Visuals, our digital marketing services are designed to grow your brand across the right platforms. We craft data-driven strategies that boost engagement, drive traffic, and convert audiences into customers. From social media to SEO, we help you stand out in the digital world."



    const items = [
        {
            id : 1,
            title : " Social Media Marketing (SMM)",
            discription : " Social Media Marketing builds strong connections between brands and their audiences. It involves creating engaging content, managing platforms, and running targeted ad campaigns. SMM boosts brand visibility, drives website traffic, and increases customer engagement.It helps businesses stay online. With the right strategy, social media turns followers into loyal customers.",
            image : "socialMedia.jpg",
            status : "right"
                  
        },

          {
            id : 2,
            title : " Paid Ads (Meta, Google)",
            discription : "Paid Ads on Meta and Google help your brand reach the right audience instantly. They drive targeted traffic, increase conversions, and boost brand awareness. With advanced targeting, every ad hits the right people at the right  time. Real-time analytics ensure better ROI. It's a powerful way to scale your businesscontinuous improvement and and get fast, measurable results.",
            image : "./googleAds.jpeg",
            status : "left"
                  
        },

          {
            id : 3,
            title : " Search Engine Optimization (SEO)",
            discription : " Search Engine Optimization (SEO) improves your website’s visibility on Google and other search engines. It helps attract organic traffic by targeting the right keywords and optimizing site performance. Good SEO builds trust, authority, and long-term online presence. From on-page content to technical fixes, every detail matters. With the right strategy, your brand ranks higher and reaches more people naturally.",

            image : "seo.jpeg",
            status : "right"
                  
        },

          {
            id : 4,
            title : " Social Media Handling & Management",
            discription : "Social Media Handling & Management keeps your brand active, engaging, and consistent across all platforms. It includes content planning, posting, responding to messages, and community building. A well-managed presence boosts trust, loyalty, and audience interaction. It ensures your brand voice stays strong and aligned with your goals. Stay connected with your audience while we manage the rest.",
            image : "socialmanagement.png",
            status : "left"
                  
        },
    ]
 
 
  return (
    <div id='digital' className='w-full h-fit p-2 mt-3 '>
      <Heading title={title} subtitle={subtitle}/>

      <div className='w-full h-fit p-2 space-y-4  md:flex md:flex-col text-primary justify-center align-middle'>
        {items.map((item) => (
               <div 
               data-aos="fade-right"
               key={item.id} className={`'w-full     md:h-60 md:mt-6 mt-12  flex flex-col-reverse md:flex-row ${item.status == "right" ? '' : 'md:flex-row-reverse md:text-right'}   justify-center align-middle'`}>
            {/* left */}
              <div className={  `md:w-1/2 h-full  ${item.status == "right" ? 'md:pr-9' : 'md:pl-9'} `}>
                   <h3 className='text-2xl font-bold'>{item.title}</h3>
                   <p className='mt-2 font-medium'>{item.discription}</p>
              </div>

              {/* right  */}

              <div className='w-1/3 h-full  rounded-2xl   overflow-hidden'>
                   <img className='w-full h-full object-contain ' src={item.image} alt="" />
              </div>
         </div>
        ))}
      </div>
    </div>
  )
}

export default DigitalMark
