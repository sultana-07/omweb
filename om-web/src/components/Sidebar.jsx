import React from 'react'
import { Link,NavLink } from 'react-router-dom';

const Sidebar = ({ setIsOpen }) => {
  const navItems = [
    { name: 'Home', id: '' },
     { name: 'Services', id: 'services' },
   
    { name: 'Contact Us', id: 'contact' },
     { name: 'About Us', id: 'about' },
   
  ];
  return (
    <>
    <div className= 'bg-white/5 backdrop-blur-sm  fixed top-0 left-0 w-full h-full  z-20' onClick={() => setIsOpen(false)}>
     
        <div className='fixed top-0 right-0 w-44 h-full  flex flex-col primary-bg items-center pt-17 space-y-2'>
           
           
         
            
            <ul className="flex flex-col space-y-4 font-bold">
              {navItems.map(item => (
              <li key={item.id}>
                <NavLink
                  to={`/${item.id}`}
                  className={({ isActive }) =>
                    `cursor-pointer px-4 py-2 rounded transition-colors duration-200 ${
                      isActive
                        ? 'bg-[#64ffda]/30 text-primary font-bold'
                        : 'hover:bg-[#64ffda]/20'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              </li>
              ))}
              </ul>
        </div>
    </div>
    </>
  )
}

export default Sidebar
