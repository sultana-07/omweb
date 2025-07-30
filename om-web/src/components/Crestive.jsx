import React from 'react'
import Heading from './Heading'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Crestive = () => {

    const title = " Creative Production"
    const subtitle = "  Creative Production transforms ideas into powerful visual stories through expert planning and execution. From concept to final cut, it brings together design, video, and storytelling seamlessly. It includes everything from shoots and edits to animations and post-production. The goal is to create content that captures attention, emotion, and imagination"
 



    const items = [
        {
            id : 1,
            title : "Video Shooting & Editing",
            discription : " Video Shooting & Editing captures your story with clarity, style, and impact. From filming high-quality visuals to crafting seamless edits, every frame is made to engage. It turns raw moments into polished, compelling video content that speaks to your audience.",
             link : "https://www.youtube.com/embed/k2FhVZRwe1w?autoplay=1&mute=1&loop=1&playlist=k2FhVZRwe1w",
            status : "right"
                  
        },

          {
            id : 2,
            title : " 3D Animation",
            discription : " 3D Animation brings ideas to life with depth, movement, and realism. It’s perfect for product visuals,explainer videos, and immersive storytelling. From modeling to rendering, every frame is crafted to captivate and engage.",

            link : "https://youtube.com/embed/qltEfCs-A8k?autoplay=1&mute=1&loop=1&playlist=qltEfCs-A8k",
            status : "left"
                  
        },

          {
            id : 3,
            title : "  3D Art",
            discription : " 3D Art brings imagination to life with depth, detail , and dynamic visuals. It’s used to create realistic models, animations, and immersive environments. From product visuals to creative storytelling, 3D adds a new dimension to design.",
            link : "https://www.youtube.com/embed/RMQHlo5-AO4?autoplay=1&mute=1&loop=1&playlist=RMQHlo5-AO4",
            status : "right"
                  
        },

          {
            id : 4,
            title : " Motion Graphics",
            discription : " Motion Graphics blend animation, text, and visuals to create engaging, dynamic content. They simplify complex ideas and add energy to your brand communication. Perfect for ads, intros, explainer videos, and social media visuals.",
            link : "https://www.youtube.com/embed/kxIHvBvgHkU?autoplay=1&mute=1&loop=1&playlist=kxIHvBvgHkU",
            status : "left"
                  
        },
        
         {
            id : 5,
            title : "  Logo Animation",
            discription : " Logo Animation adds life and motion to your brand identity, making it more memorable and engaging. It enhances brand recognition through dynamic, visually striking intros and outros. Perfect for videos, presentations, and social media, animated logos leave a lasting impression.",
            link : "https://www.youtube.com/embed/cqTii-CkGn4?autoplay=1&mute=1&loop=1&playlist=cqTii-CkGn4 ",
           status : "right"
                  
        },

    ]
 
 
  return (
    <div id='creative' className='w-full h-fit p-2 mt-3 '>
      <Heading title={title} subtitle={subtitle}/>

      <div className='w-full h-fit p-2 space-y-4  md:flex md:flex-col text-primary justify-center align-middle'>
        {items.map((item) => (
               <div
               data-aos="fade-right"
               key={item.id} className={`'w-full     md:h-60 md:mt-6 mt-12  flex flex-col-reverse md:flex-row ${item.status == "right" ? '' : 'md:flex-row-reverse md:text-right'}   justify-center align-middle'`}>
            {/* left */}
              <div className={  `md:w-1/2 h-full  flex flex-col justify-center ${item.status == "right" ? 'md:pr-28' : 'md:pl-28'} `}>
                   <h3 className='text-2xl font-bold'>{item.title}</h3>
                   <p className='mt-2 '>{item.discription}</p>
              </div>

              {/* right  */}

              <div className='md:w-1/3 w-1/2 h-full object-cover rounded-2xl  md:rounded-none overflow-hidden'>
                   {/* <img className='w-full h-full object-cover' src={item.image} alt="" /> */}
                   <iframe className='w-full h-full' src={item.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
         </div>
        ))}
      </div>
    </div>
  )
}

export default Crestive
