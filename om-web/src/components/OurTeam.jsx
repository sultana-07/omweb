import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const teamMembers = [
  {
    name: 'Sudhanshu',
    role: 'Video Shooter',
    img: './sudhansu.jpeg',
    desc: 'Bringing stories to life through expert camera work.',
  },
  {
    name: 'Ketan',
    role: 'Video Editor',
    img: './ketan.jpeg',
    desc: 'Shaping raw footage into captivating visual stories.',
  },
  {
    name: 'Aman',
    role: 'Graphic Designer',
    img: './aman.jpg',
    desc: 'Designing impactful visuals that speak your brand’s language.',
  },
]

const OurTeam = () => {
  return (
    <div className="w-full h-full md:py-6 py-4 px-4 flex flex-col items-center text-center">
      <h2 className="text-4xl font-extrabold mb-2 text-primary drop-shadow-lg tracking-wide">Our Team</h2>
      <p className="mb-10 text-gray-700 text-lg">Meet the talented individuals behind our success.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-5xl">
        {teamMembers.map((member, idx) => (
          <div
          data-aos="fade-right"
          data-aos-duration="2000"
            key={idx}
            className="relative bg-white/90 shadow-xl rounded-3xl p-8 flex flex-col items-center transition-transform hover:-translate-y-3 hover:shadow-2xl duration-300 border-t-4 border-[#0a8d68] group"
          >
            <div className="relative mb-4">
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 rounded-full object-cover border-4 border-[#5fbfa0] shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute bottom-0 right-2 bg-[#0a8d68] text-white text-xs px-3 py-1 rounded-full shadow-md font-semibold">
                {member.role}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-[#0a8d68] mb-1">{member.name}</h3>
            <p className="text-gray-600 mb-2">{member.desc}</p>
            <div className="w-10 h-1 bg-gradient-to-r from-[#0a8d68] to-[#5fbfa0] rounded-full mb-2"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurTeam;