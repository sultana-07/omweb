import React from 'react'

const Founder = () => {

    const founderInfo = [
        {
            id : 1,
            img: "./Krishna.png",
           
        },
        { 
             id : 2,
            img: "./Om.png",
            
        }
    ]

  return (
     <div className='w-full h-full  p-3 flex gap-1   '>
        {founderInfo.map((item) => (
            <div key={item.id} className='w-1/2 mt-2 rounded-2xl overflow-hidden'>
               <img src={item.img} alt="" />
            </div>
        ))}
           
     </div>
  )
}

export default Founder
