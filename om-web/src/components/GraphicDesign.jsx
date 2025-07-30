import React from 'react'
import Heading from './Heading'
import Aos from 'aos'
import 'aos/dist/aos.css'

const GraphicDesign = () => {
    const head = [
        {
            title : " Graphic Design",
            subtitle : "Graphic Design communicates your brand's message through impactful and aesthetic visuals. It combines color, typography, layout, and imagery to create memorable experiences. From social media posts to brand identity, every design element adds meaning and value. Great graphic design not only looks good—it connects, engages, and inspires."
        },
        {
            title : "Branding & Logo Design",
            subtitle : "Branding and Logo Design shape the first impression of your business. A strong logo reflects your identity, values, and vision in a single mark. Branding builds consistency across all touchpoints, from colors to tone of voice, it helps your audience recognize, trust, and connect with your brand. Together, they create a lasting image that sets you apart in a crowded market."
        }
    ]

    const items = [
      {
        id  : 1,
        title : "Pizza Brand",
        dis : "Draco is a fiery and flavorful pizza brand serving bold taste with every slice.",
        img : "./Draco-01.png",
        link  : "https://www.dropbox.com/scl/fi/tiequcjmh46745601g3i3/Draco.pdf?rlkey=y8ctksuxucqy78ts95py3o21g&st=5hz53v5e&dl=0"
      },
      {
        id  : 2,
        title : "Traditional Wear",
        dis : "Mehfil is an elegant Indian clothing brand celebrating tradition, craftsmanship, and timeless style.",
        img : "./mehfil-01.png",
        link : "https://www.dropbox.com/scl/fi/askzlpp16xtfa731e0q0h/Mehfil-Branding.pdf?rlkey=e5psrlxaq43431vqnupt054rl&st=ufkzv566&dl=0"
      },
      {
        id  : 3,
        title : "Pet Food Brand",
        dis : "Woffy is a wholesome pet food brand serving love, nutrition and tail-wagging goodness in every bite.",
        img : "./Woffy-01.png",
        link : "https://www.dropbox.com/scl/fi/l26rjvonyx4txxwxej2qb/Branding.ai-2.pdf?rlkey=xo75i4ijhp27lnw93pmz5kt7u&st=a8m0tg7u&dl=0"
      },
      {
        id  : 4,
        title : "Sofa Brand",
        dis : "Sofa Nest offers cozy, stylish, and durable sofas, designed to make every space feel like home.",
        img : "./SofaNest-01.png",
        link : "https://www.dropbox.com/scl/fi/8ajikdff92ta6fsfqng5h/Sofa-Nest-Completed.pdf?rlkey=qz4c918bpku0wjqumdd7h7euu&st=5nsukna9&dl=0"
      },
      {
        id  : 5,
        title : "HeadPhones Brand",
        dis : "Echo delivers immersive sound and sleek design for a powerful listening experience.",
        img : "./echo-01.png",
        link : "https://www.dropbox.com/scl/fi/857j2m6qxt7h67f44sk19/echo.pdf?rlkey=wl6ccbktvos1hlg3l2vdap74d&st=5d95a0pm&dl=0"
      },
      {
        id  : 6,
        title : "Snacks Brand",
        dis : "Just Yum brings you irresistibly tasty snacks, made to delight every craving in a bite.",
        img : "./Justyum-01.png",
        link : "https://www.dropbox.com/scl/fi/8lkyyjv7gwo8msbo6y42n/JUST-YUMM.pdf?rlkey=fylu9r47mndltyoef9sh5fccu&st=2me1wldf&dl=0"
      },
      {
        id  : 7,
        title : "Jewellery Brand",
        dis : "Golden Grace offers timeless, elegant jewelry that adds a touch of luxury to every moment. ",
        img : "./goldengrace-01.png",
        link : "https://www.dropbox.com/scl/fi/6jk1dj9zgvn0lrf6ouxq2/GOLDEN-GRACE.pdf?rlkey=xcc7fxxlkxn326hpxybmfvfc4&st=brydxxcw&dl=0"
      },
      {
        id  : 8,
        title : "Clothing Brand",
        dis : "Fabrix blends comfort and style to create modern clothing that feels as good as it looks.",
        img : "./Fabrix-01.png",
        link : "https://www.dropbox.com/scl/fi/5d1h4c8rq2oves5j430cl/fabrix-Fianl.pdf?rlkey=sefk453wmqp6hgc6zgg4kc0c3&st=7raj8cap&dl=0"
      }
    ]

    return (
      <div id='graphic' className='w-full h-fit p-2 mt-40'>
        <Heading title={head[0].title} subtitle={head[0].subtitle} />

        <div className='w-full md:h-96 h-52 mt-3 flex justify-center items-center mb-10'>
          <div className='w-[90%] md:w-[50%] h-full object-cover'>
            <img className='w-full h-full object-contain' src="./graphicDesign.PNG" alt="" />
          </div>
        </div>

        <Heading title={head[1].title} subtitle={head[1].subtitle} />

        <div className='w-full h-fit p-2 grid grid-cols-2 md:grid-cols-4 gap-6'>
          {items.map(item => (
             <a href={item.link} target="_blank" rel="noopener noreferrer">
            <div
              data-aos="zoom-in"
              key={item.id}
              className='bg-white rounded-2xl shadow-md flex flex-col items-center p-4 h-full transition-transform hover:-translate-y-2 hover:shadow-xl duration-300'
            >
              <div className='w-full h-32 md:h-36 rounded-xl overflow-hidden mb-3 flex items-center justify-center primary-bg'>
               
                  <img className='w-full h-full object-contain' src={item.img} alt={item.title} />
               
              </div>
              <div className='w-full text-center'>
                <h3 className='font-semibold text-lg mb-1 text-[#045B66]'>{item.title}</h3>
                <p className='text-xs text-gray-700'>{item.dis}</p>
              </div>
            </div>
             </a>
          ))}
        </div>
      </div>
    )
}

export default GraphicDesign