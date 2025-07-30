import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Patner = () => {

  const partners = [
    "./patnerlogo/5gb.png",
     "./patnerlogo/Avproperties.png",
     "./patnerlogo/Bigwigsocial.png",
      "./patnerlogo/Coinsstuff.png",
     "./patnerlogo/Dora.png",
     "./patnerlogo/HDR.png",
      "./patnerlogo/hhk.png",
     "./patnerlogo/Ojas.png",
     "./patnerlogo/PositiveReakState.png",
      "./patnerlogo/Ribonsalon.png",
     "./patnerlogo/treegreen.png",
     "./patnerlogo/TrueHeal.png",
  ]
  return (
    <div className='w-full h-full  p-3  ' >
       <div className='w-full h-[20%]  flex justify-center items-center text-primary'>
         <div className='md:w-[50%] w-full h-full flex  justify-center items-center  gap-6'>
            <div data-aos="slide-right" data-aos-duration="2000" className='w-25 font-bold text-2xl '>
             {/* <h3 className='custom-shadow '>SPARK <span><i className="fa-solid fa-fire-flame-curved text-xl"></i></span></h3>
            <h3 className='custom-shadow '>VISUALS</h3> */}
            <img className='w-full h-full' src="smalllogo.png" alt="" />
            </div>
   
            <div className='w-5 h-[90%] bg-black'></div>

            <div  data-aos="slide-left" data-aos-duration="2000" className=' text-xl text-primary font-bold'>
                <h3>Our Creative</h3>
                <h3>Growth Partner</h3>
            </div>
           
         </div>

          
       </div>





      <div className=" mt-3 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {partners.map((partner, index) => (
          <div  data-aos="zoom-out" data-aos-duration="2000"
            key={index}
            className="bg-white shadow-md rounded-lg h-24 flex items-center justify-center text-center p-1 text-sm font-medium"
          >
            <img src={partner} alt={`Partner ${index + 1}`} className="h-full w-full object-contain" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Patner
